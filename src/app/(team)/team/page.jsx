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
      <CardSection start={0} end={1100}>
        <TitleCard title="Management" theme={["#0F971C", "#0F8019", "#0D3A11"]}>
          <LeadSlate name="Ayain Shousa" />
          <CoLeadSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
        </TitleCard>
        <TitleCard title="Management" theme={["#0F971C", "#0F8019", "#0D3A11"]}>
          <LeadSlate name="Ayain Shousa" />
          <CoLeadSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
        </TitleCard>
        <TitleCard title="Management" theme={["#0F971C", "#0F8019", "#0D3A11"]}>
          <LeadSlate name="Ayain Shousa" />
          <CoLeadSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
        </TitleCard>
      </CardSection>

      <CardSection start={1100} end={0}>
        <TitleCard
          title="Development"
          theme={["#90e0ef", "#00b4d8", "#0077b6"]}
        >
          <LeadSlate name="Ayain Shousa" />
          <CoLeadSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
        </TitleCard>
        <TitleCard
          title="Development"
          theme={["#90e0ef", "#00b4d8", "#0077b6"]}
        >
          <LeadSlate name="Ayain Shousa" />
          <CoLeadSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
        </TitleCard>
        <TitleCard
          title="Development"
          theme={["#90e0ef", "#00b4d8", "#0077b6"]}
        >
          <LeadSlate name="Ayain Shousa" />
          <CoLeadSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
        </TitleCard>
      </CardSection>
      <CardSection start={0} end={1100}>
        <TitleCard title="Technical" theme={["#ffbe0b", "#fb5607", "#fcbf49"]}>
          <LeadSlate name="Ayain Shousa" />
          <CoLeadSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
        </TitleCard>
        <TitleCard title="Technical" theme={["#ffbe0b", "#fb5607", "#fcbf49"]}>
          <LeadSlate name="Ayain Shousa" />
          <CoLeadSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
        </TitleCard>
        <TitleCard title="Technical" theme={["#ffbe0b", "#fb5607", "#fcbf49"]}>
          <LeadSlate name="Ayain Shousa" />
          <CoLeadSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
          <MemberSlate name="Ayain Shousa" />
        </TitleCard>
      </CardSection>
    </motion.div>
  );
};

export default page;
