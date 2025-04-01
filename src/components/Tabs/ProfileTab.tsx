import { useState } from 'react';
import Card from '../Card';

const ProfileTab = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = (card: string) => {
    console.log(`${card} card edited`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Company Details Card */}
        <Card title="Company Details" onEdit={() => handleEdit('Company Details')}>
          <div className="flex items-center space-x-4">
            {/* Profil Fotoğrafı */}
            <div className="relative">
              <img
                src={profileImage || '/default-avatar.jpeg'}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4"
              />
            </div>
            {/* Company Details */}
            <div>
              <p><strong>Operator ID:</strong> 11335578</p>
              <p><strong>Company Number:</strong> 987654321</p>
              <p><strong>Legal Name:</strong> Tripkolic</p>
              <p><strong>TAT Number:</strong> 123456</p>
              <p><strong>VAT Number:</strong> VAT987654</p>
              <p><strong>Address:</strong> 1234, Tripkolic St.</p>
            </div>
          </div>
        </Card>

        {/* Bank Details Card */}
        <Card title="Bank Details" onEdit={() => handleEdit('Bank Details')}>
          <div>
            <p><strong>Account Type:</strong> Business</p>
            <p><strong>Bank Name:</strong> Bank of XYZ</p>
            <p><strong>Account Name:</strong> Tripkolic Co.</p>
            <p><strong>Account Number:</strong> 1234567890</p>
          </div>
        </Card>

        {/* Contact Details Card */}
        <Card title="Contact Details" onEdit={() => handleEdit('Contact Details')}>
          <div>
            <p><strong>Company Owner Name:</strong> John Doe</p>
            <p><strong>Phone Number:</strong> +123 456 7890</p>
            <p><strong>Office Phone Number:</strong> +123 987 6543</p>
            <p><strong>Email:</strong> contact@tripkolic.com</p>
          </div>
        </Card>

        {/* Settings Card */}
        <Card title="Settings" onEdit={() => handleEdit('Settings')}>
          <div>
            <button className="text-blue-500 hover:underline">Change Password</button>
            <br />
            <button className="text-blue-500 hover:underline">Change Email</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileTab;
