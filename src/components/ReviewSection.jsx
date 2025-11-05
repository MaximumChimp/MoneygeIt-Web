import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../../firebase-config";

export default function ReviewSection() {
  const [user, setUser] = useState(null);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Monitor auth state
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });

    // Real-time feedback listener
    const q = query(collection(db, "feedbacks"), orderBy("createdAt", "desc"));
    const unsubscribeFeedback = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFeedbacks(data);
      setLoading(false);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeFeedback();
    };
  }, []);

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // show form immediately
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  // Google Sign-Out
  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  // Submit feedback
  const handleSubmit = async () => {
    if (!user) return alert("Please sign in with Google first!");
    if (!message || rating === 0)
      return alert("Please provide a message and rating.");

    try {
      await addDoc(collection(db, "feedbacks"), {
        name: user.displayName,
        email: user.email,
        message,
        rating,
        createdAt: serverTimestamp(),
      });
      setMessage("");
      setRating(0);
    } catch (error) {
      console.error("Error saving feedback:", error);
    }
  };

  // Average rating
  const averageRating =
    feedbacks.length > 0
      ? feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length
      : 0;

  return (
    <section id="review" className="min-h-screen bg-gradient-to-b from-white to-[#EDEDEE] flex flex-col items-center justify-center px-6 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#145C84] mb-2">
        Customer Reviews
      </h2>
      <p className="text-base md:text-lg text-gray-600 max-w-2xl mb-6">
        See what our users are saying about MoneygeIt and send us your own
        feedback!
      </p>

      {/* Average Rating */}
      <div className="flex items-center space-x-2 mb-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-6 h-6 ${
              i < Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-gray-600">{averageRating.toFixed(1)} / 5</span>
      </div>

      {/* Reviews Display */}
      <div className="w-full max-w-2xl flex flex-col items-center space-y-6 mb-12">
        {loading ? (
          <p className="text-gray-500">Loading reviews...</p>
        ) : feedbacks.length === 0 ? (
          <p className="text-gray-500">
            No reviews yet. Be the first to leave feedback!
          </p>
        ) : (
          feedbacks.map((fb) => (
            <div key={fb.id} className="flex flex-col items-center space-y-1">
              <p className="text-gray-700 text-lg md:text-xl">"{fb.message}"</p>
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < fb.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <h4 className="font-bold text-blue-600 text-lg">{fb.name}</h4>
              <p className="text-gray-500 text-sm">Verified User</p>
            </div>
          ))
        )}
      </div>

      {/* Feedback Form */}
      <div className="w-full max-w-2xl flex flex-col items-center space-y-4">
        {!user ? (
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center bg-white border border-gray-300 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
        ) : (
          <div className="w-full flex flex-col items-center space-y-4">
            <h3 className="text-2xl font-bold text-[#145C84] mb-4">
              Send Us Your Feedback
            </h3>

            <textarea
              placeholder="Your Message or Query"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145C84]"
            ></textarea>

            {/* Star Rating */}
            <div className="flex flex-col items-center">
              <span className="mb-2 text-gray-600">Your Rating</span>
              <div className="flex space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 cursor-pointer ${
                      i < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() => setRating(i + 1)}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-[#145C84] text-[#F7F2B3] px-6 py-3 rounded-2xl font-semibold hover:bg-[#1A7BAE] transition-colors duration-300"
            >
              Submit Feedback
            </button>

            <button
              onClick={handleSignOut}
              className="text-gray-500 text-sm mt-2 underline hover:text-gray-700"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
