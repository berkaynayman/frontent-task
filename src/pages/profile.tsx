import { useState } from 'react';
import Tab from '../components/Tab';
import TabContent from '../components/TabContent';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Tablar */}
      <div className="sticky top-0 z-10">
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Tab İçeriği */}
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default ProfilePage;
