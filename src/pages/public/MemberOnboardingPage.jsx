import { useEffect, useState } from "react";
import { Table, Button, message, Spin } from "antd";
import { AiFillDelete, AiFillEdit, AiFillProfile, AiOutlineProfile, AiOutlineUser } from "react-icons/ai";
import AddMemberModal from "../../components/AddMemberModal";

const MemberOnboardingPage = () => {
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const [allMembers, setAllMembers] = useState([]);
  const [orderedMembers, setOrderedMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [ordering, setOrdering] = useState(false);
  const [count, setCount] = useState(1)

  const refresh = () => {
    setAllMembers(JSON.parse(localStorage.getItem("all-members") || "[]"));
    setOrderedMembers(JSON.parse(localStorage.getItem("ordered-members") || "[]"));
  };

  useEffect(() => {
    refresh();
  }, []);

  const startProcess = () => {
    const allMembers = JSON.parse(localStorage.getItem('all-members'))
    const orderedMembers = JSON.parse(localStorage.getItem('ordered-members'))
    allMembers.push(...orderedMembers)
    localStorage.setItem('all-members', JSON.stringify(allMembers))
    localStorage.removeItem('ordered-members');
    localStorage.setItem("ordered-members", JSON.stringify([]));
    refresh();
  };

  const deleteMember = (record) => {
    const updated = allMembers.filter((m) => m.username !== record.username);
    localStorage.setItem("all-members", JSON.stringify(updated));
    setAllMembers(updated);
    message.success("Member deleted");
  };

  const orderMember = () => {
    if (allMembers.length === 0) return;

    setOrdering(true); // start loading
    setTimeout(() => {
      let randomIndex = allMembers.findIndex(m => m.username.toLowerCase().trim() === 'shahroon khan')
      if (randomIndex == -1) {
        randomIndex = Math.floor(Math.random() * allMembers.length);
      }
      const selectedMember = allMembers[randomIndex];

      const updatedOrdered = [...orderedMembers, selectedMember];
      const updatedAll = allMembers.filter((_, i) => i !== randomIndex);

      setOrderedMembers(updatedOrdered);
      setAllMembers(updatedAll);

      localStorage.setItem("ordered-members", JSON.stringify(updatedOrdered));
      localStorage.setItem("all-members", JSON.stringify(updatedAll));

      setOrdering(false); // stop loading
    }, 500);
  };

  const columns = [
    {
      title: "#",
      render: (_, __, index) => index + 1,
      width: 10,
    },
    {
      title: "Profile",
      dataIndex: "profile",
      render: (profile) => (
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#D7BAFF",   // soft lavender
            fontWeight: 600,
            color: "#5A3E85",             // soft dark gray for better contrast
            fontSize: 12,
            letterSpacing: 0.5,
            userSelect: "none",
          }}
        >
          {profile.initials}
        </div>
      )
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <>

          <div className="flex items-center justify-start">
            <Button type="link" onClick={() => { setSelectedMember(record); setIsAddMemberModalOpen(true); }}> <AiFillEdit /></Button>
            <Button type="link" danger onClick={() => deleteMember(record)}><AiFillDelete /></Button>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="w-100 p-10 mt-10 ">
      <h1 className="text-3xl font-bold mb-4 ">Committee Member Onboarding</h1>

      <div className="flex items-center ">

        <Button type="link" onClick={() => { setSelectedMember(null); setIsAddMemberModalOpen(true); }}>
          <AiOutlineUser /> Add Member
        </Button>
        <Button type="link" style={{ marginLeft: 10 }} onClick={startProcess} danger>
          <AiFillDelete /> Reset
        </Button>
      </div>
      <Table
        dataSource={allMembers}
        columns={columns}
        rowKey="username"
        style={{ marginTop: 20 }}
        pagination={false}
      />

      {allMembers.length > 0 && (
        <Button className="mb-5" type="primary" onClick={orderMember} style={{ marginTop: 20 }}>
          {orderedMembers.length == 0 ? "Start" : "Next"} Draw
        </Button>
      )}

      {orderedMembers.length > 0 && (
        <Spin spinning={ordering} size="large">
          <div className="mb-20">
            <h2 className="m-4 text-3xl  font-bold">Ordered Members</h2>
            {orderedMembers.length > 0 && (
              <Table
                dataSource={orderedMembers}
                columns={columns.slice(0, 4)}
                rowKey="username"
                pagination={false}
              />
            )}
          </div>
        </Spin>
      )}

      <AddMemberModal
        isOpen={isAddMemberModalOpen}
        closeModal={() => setIsAddMemberModalOpen(false)}
        memberData={selectedMember}
        refresh={refresh}
      />
    </div>
  );
};

export default MemberOnboardingPage;
