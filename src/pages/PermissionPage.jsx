import HeaderActions from "../components/HeaderActions";
import UserSelection from "../components/UserSelection";
import AssignedUserTable from "../components/AssignedUserTable";
import PermissionTable from "../components/PermissionTable";

export default function PermissionPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb] px-6 py-6">
      <div className="w-full mx-auto space-y-4">
        <HeaderActions />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="space-y-4">
            <UserSelection />
            <AssignedUserTable />
          </div>

          <div className="lg:col-span-2">
            <PermissionTable />
          </div>
        </div>
      </div>
    </div>
  );
}
