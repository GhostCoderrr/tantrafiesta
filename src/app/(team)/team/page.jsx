"use client";

import CardSection from "@/components/teamBytes/CardSection";
import CoLeadSlate from "@/components/teamBytes/CoLeadSlate";
import LeadSlate from "@/components/teamBytes/LeadSlate";
import MemberSlate from "@/components/teamBytes/MemberSlate";
import TitleCard from "@/components/teamBytes/TitleCard";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
        duration: 1,
      }}
      className="lg:h-screen w-screen pt-24 md:pt-0 lg:overflow-hidden flex lg:flex-row flex-col justify-center items-center bg-black"
    >
      <CardSection start={1620} end={50}>
        <TitleCard
          title="Management"
          height="75vh"
          theme={["#0F971C", "#0F8019", "#0D3A11"]}
        >
          <LeadSlate name="Rohan Udhwani" title="General Secretary" />
          <LeadSlate name="Aman Sahu" title="Joint Secretary" />
          <LeadSlate name="Kumar Rishav " title="Technical Secretary" />
          <LeadSlate name="Priyanshu Chhabda" title="Discipline Secretary" />
          <CoLeadSlate name="Bino Manjesh" title="Technical Coordinator" />
          <CoLeadSlate name="Harsh Patwar" title="Discipline Coordinator" />
        </TitleCard>
        <TitleCard title="Content" theme={["#90e0ef", "#00b4d8", "#0077b6"]}>
          <LeadSlate name="Suyash Mahajan " />
          <CoLeadSlate name="Shreyash Suradkar" />
          <CoLeadSlate name="Jignesh Patil " />
          <CoLeadSlate name="Hemant" />
        </TitleCard>

        <TitleCard
          title="Photography"
          theme={["#AAAAAA", "#FFFFFF", "#555555"]}
        >
          <LeadSlate name="Anuj Jain" />
          <LeadSlate name="Vinay Badlani" />
          <CoLeadSlate name="Akshit Gangwar " />
        </TitleCard>
        <TitleCard
          title="Event Management"
          theme={["#FD4556", "#BD3944", "#D62964"]}
        >
          <LeadSlate name="Pranav " />
          <LeadSlate name="Tanmay Rokde" phone="+91 91792 66570" />
          <LeadSlate name="Saket Sanadhya" phone="+91 6377 121 184" />
          <CoLeadSlate name="Soham" />
          <CoLeadSlate name="Tushar Pandole" />
          <CoLeadSlate name="Imtiyaz Khan" />
        </TitleCard>
      </CardSection>
      <CardSection start={0} end={1570}>
        <TitleCard
          title="Hospitality"
          theme={["#0F971C", "#0F8019", "#0D3A11"]}
        >
          <LeadSlate name="Siddh Jain" phone="+91 72064 98895" />
          <LeadSlate name="Krishna" phone="+91 87882 68288" />
          <CoLeadSlate name="Nishchint Kamath" />
        </TitleCard>
        <TitleCard title="Design" theme={["#7b1fa2", "#673ab7", "#f48fb1"]}>
          <LeadSlate name="Sumit Shee" />
          <CoLeadSlate name="Piyush Waje" />
          <CoLeadSlate name="Anuj Kumar" />
        </TitleCard>
        <TitleCard title="Corporate" theme={["#ffbe0b", "#fb5607", "#fcbf49"]}>
          <LeadSlate name="Deepak Singh Chauhan " phone="+91 91402 64090" />
          <CoLeadSlate name="Vraj Talati" phone="+91 97125 68699" />
          <CoLeadSlate name="Harsh Bajaj" phone="+91 84475 37313" />
        </TitleCard>
        <TitleCard title="Web Dev" theme={["#90e0ef", "#00b4d8", "#0077b6"]}>
          <LeadSlate name="Jayvardhan Patil" />
          <CoLeadSlate name="Aryan Singh" />
          <CoLeadSlate name="Kunal Sharma" />
        </TitleCard>
      </CardSection>
      <CardSection start={1000} end={50}>
        <TitleCard title="Marketing" theme={["#FD4556", "#BD3944", "#D62964"]}>
          <LeadSlate name="Anjalika" />
          <CoLeadSlate name="Vaibhav Taywade " />
          <CoLeadSlate name="Akhil Daver" />
          <CoLeadSlate name="Yeshwant " />
          <CoLeadSlate name="Sankeerth Kankati" />
        </TitleCard>
        <TitleCard title="Decor" theme={["#ffbe0b", "#fb5607", "#fcbf49"]}>
          <LeadSlate name="Shrived Tadas" />
          <CoLeadSlate name="Pranav Sonar" />
          <CoLeadSlate name="Samruddhi " />
          <CoLeadSlate name="Pallavi Vasuniya " />
        </TitleCard>
        <TitleCard title="Security" theme={["#AAAAAA", "#FFFFFF", "#555555"]}>
          <LeadSlate name="Yash Patidar" phone="+91 6376 540 711" />
          <CoLeadSlate name="Yash Natani" phone="+91 79873 86670" />
        </TitleCard>
      </CardSection>
    </motion.div>
  );
};

export default page;
