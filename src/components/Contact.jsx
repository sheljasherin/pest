import { motion } from 'framer-motion';

function Contactus() {
  // Define animation variants for each field
  const inputVariants = {
    left: { 
      hidden: { opacity: 0, x: -100 }, 
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } 
    },
    right: { 
      hidden: { opacity: 0, x: 100 }, 
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } 
    },
    top: { 
      hidden: { opacity: 0, y: -50 }, 
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } 
    },
    bottom: { 
      hidden: { opacity: 0, y: 50 }, 
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } 
    },
  };

  return (
    <div className="">
      <div className="max-w-sm mx-auto p-2 border rounded-lg shadow-lg bg-white mt-20 mb-10">
        <h2 className="text-lg font-bold mb-2 text-center">Contact Us</h2>
        <form>
          <motion.div
            className="mb-2"
            initial="hidden"
            animate="visible"
            variants={inputVariants.left}  // Input comes from the left
          >
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" className="input input-bordered w-full" placeholder="Your Name" required />
          </motion.div>

          <motion.div
            className="mb-2"
            initial="hidden"
            animate="visible"
            variants={inputVariants.right}  // Input comes from the right
          >
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="input input-bordered w-full" placeholder="Your Email" required />
          </motion.div>

          <motion.div
            className="mb-2"
            initial="hidden"
            animate="visible"
            variants={inputVariants.top}  // Input comes from the top
          >
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input type="tel" className="input input-bordered w-full" placeholder="Your Phone Number" required />
          </motion.div>

          <motion.div
            className="mb-2"
            initial="hidden"
            animate="visible"
            variants={inputVariants.bottom}  // Input comes from the bottom
          >
            <label className="block text-sm font-medium mb-1">Additional Comments</label>
            <textarea className="textarea textarea-bordered w-full" placeholder="Your Comments" rows="2"></textarea>
          </motion.div>

          <motion.button 
            type="submit" 
            className="btn bg-green-400 w-full p-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }} // Button fade-in
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
