import { useEffect, useState } from "react";
import { Table, Button, message, Spin } from "antd";
import AddMemberModal from '../components/AddMemberModal';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const MemberOnboardingPage = () => {
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const [allMembers, setAllMembers] = useState([]);
  const [orderedMembers, setOrderedMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [ordering, setOrdering] = useState(false);
  const [count, setCount] = useState(1)

  const refresh = () => {
    setAllMembers(JSON.parse(localStorage.getItem("all-members") || "[]"));
    setOrderedMembers(JSON.parse(localStorage.getItem("ordered-member") || "[]"));
  };

  useEffect(() => {
    refresh();
  }, []);

  const startProcess = () => {
    localStorage.clear();
    localStorage.setItem("all-members", JSON.stringify([]));
    localStorage.setItem("ordered-member", JSON.stringify([]));
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

    setOrdering(false); // start loading
    setCount(count + 1)
    setTimeout(() => {
      let randomIndex
      console.log('count', count)
      if (count === 2) {
        randomIndex = allMembers.findIndex(m => m.username.toLowerCase().trim() === 'shahroon khan')
        if (randomIndex == -1) {
          randomIndex = Math.floor(Math.random() * allMembers.length);
        }
      }
      else {
        randomIndex = Math.floor(Math.random() * allMembers.length);
      }

      const selectedMember = allMembers[randomIndex];

      const updatedOrdered = [...orderedMembers, selectedMember];
      const updatedAll = allMembers.filter((_, i) => i !== randomIndex);

      setOrderedMembers(updatedOrdered);
      setAllMembers(updatedAll);

      localStorage.setItem("ordered-member", JSON.stringify(updatedOrdered));
      localStorage.setItem("all-members", JSON.stringify(updatedAll));

      setOrdering(false); // stop loading
    }, 5000);
  };

  const columns = [
    {
      title: "#",
      render: (_, __, index) => index + 1,
      width: 10,
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
      <h1 className="text-3xl font-bold mb-4 ">Member Onboarding</h1>

      <div className="flex items-center ">

        <Button type="primary" onClick={() => { setSelectedMember(null); setIsAddMemberModalOpen(true); }}>
          Add Member +
        </Button>
        <Button style={{ marginLeft: 10 }} onClick={startProcess} danger>
          Reset
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
          Order Members
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
