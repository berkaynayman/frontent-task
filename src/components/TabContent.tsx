import { FC } from 'react';
import ProfileTab from './Tabs/ProfileTab';

interface TabContentProps {
  activeTab: string;
}

const TabContent: FC<TabContentProps> = ({ activeTab }) => {
  switch (activeTab) {
    case 'profile':
      return (
        <div className="p-4">
          <ProfileTab />
        </div>
      );
    case 'user':
      return (
        <div className="p-4">
          <h2 className="text-xl font-semibold">User Content</h2>
          <p>User related information will be shown here.</p>
        </div>
      );
    case 'product':
      return (
        <div className="p-4">
          <h2 className="text-xl font-semibold">Product Content</h2>
          <p>Product related information will be shown here.</p>
        </div>
      );
    case 'seller':
        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold">Seller Content</h2>
            <p>Seller tab</p>
          </div>
        );
    default:
      return <div className="p-4">Select a tab to view content.</div>;
  }
};

export default TabContent;
