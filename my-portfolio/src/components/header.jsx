import react from 'react';
import { motion } from 'framer-motion';

function Header() {
    return (
        <motion.header className="flex justify-center">
            <div className="flex ">
                <h1>My portfolio</h1>
            </div>
        </motion.header>
    )
}

export default Header;