function LeftMenu() {
  return (
    <div>
      <div className="bg-[#ffffff] text-gray-950 dark:text-black h-screen rounded-lg">
        <ul className="p-4 space-y-[4px] ">
          <li className="border-b border-gray-200">Dashboard</li>
          <li className="border-b border-gray-200">Users</li>
          <li className="border-b border-gray-200">Products</li>
          <li className="border-b border-gray-200">Transactions</li>
          <li className="border-b border-gray-200">Reports</li>
        </ul>
      </div>
    </div>
  );
}

export default LeftMenu;
