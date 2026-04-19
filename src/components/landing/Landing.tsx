"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Hero from './Hero'
import Clients from './Clients'
import Testimonials from './Testinomials'

export default function Landing() {
    return (
        <div>
            <Hero />
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <Clients />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <Testimonials />
            </motion.div>
        </div>
    )
}
