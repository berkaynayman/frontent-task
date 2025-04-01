import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Login işlemi
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Hata mesajını temizle

    try {
      const response = await axios.post('https://api.tripkolic.com/api/v1/task/login', {
        userId: userId,
        password: password,
      });

      // Eğer giriş başarılıysa, Profil sayfasına yönlendir
      if (response.data.status) {
        router.push('/profile');
      } else {
        setError('Giriş başarısız, lütfen bilgilerinizi kontrol edin.');
      }
    } catch (err) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="mb-6 w-40 h-auto" />

      {/* Login Form */}
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="userId" className="block text-gray-700 text-sm font-semibold">User ID</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="User ID"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-semibold">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button className="mb-4 text-blue-500 hover:underline">Forgot Password</button>

        <button
          type="submit"
          className={`w-full py-2 px-4 bg-mainOrange text-white rounded-md hover:bg-hoverOrange focus:outline-none focus:ring-2 focus:ring-[#f9800f] ${loading && 'opacity-50 cursor-not-allowed'}`}

          disabled={loading}
        >
          {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
        </button>

        <div className='text-center mt-8 text-mainOrange'>Register as</div>
        <div className="flex justify-between mt-4">       
          <button className="py-2 px-4 bg-gray-300 rounded-md text-white">Operator</button>
          <button className="py-2 px-4 bg-gray-300 rounded-md text-white">Seller</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
