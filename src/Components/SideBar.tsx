import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="relative">

    <motion.div className="fixed top-0 left-0 w-64 h-screen bg-gray-900 text-white shadow-lg">
      
    </motion.div>
  </div>;
};

export default SideBar;
