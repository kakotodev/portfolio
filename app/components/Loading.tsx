"use client";
import { motion } from "framer-motion";

export default function Loading() {

    return(
        <>
            <motion.div 
            className="loader"
            initial={{ opacity: 1 }}    // État de départ
            exit={{ opacity: 0 }}       // Animation quand il disparaît
            transition={{ duration: 0.8, ease: "easeInOut" }} // Durée du fondu
            >
                <div className="loader">
                    <div className="loader-content">
                        <div className="circ">
                        <div className="load">Loading . . . </div>
                        <div className="hands"></div>
                        <div className="body"></div>
                        <div className="head">
                            <div className="eye"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}