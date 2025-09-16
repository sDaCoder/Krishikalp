"use client"
import React from 'react'
import { motion } from 'motion/react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLeaf, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
            <footer className="bg-sidebar border-t border-sidebar-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faLeaf} className="h-8 w-8 text-sidebar-accent" />
                            <span className="text-xl font-bold text-sidebar-foreground">KrishiKalp</span>
                        </div>
                        <p className="text-sidebar-foreground/80 text-sm leading-relaxed">
                            Connecting farmers and agricultural professionals worldwide to build a sustainable future through shared
                            knowledge and community.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: faFacebook, href: "#" },
                                { icon: faTwitter, href: "#" },
                                { icon: faInstagram, href: "#" },
                                { icon: faLinkedin, href: "#" }
                            ].map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="text-sidebar-foreground/60 hover:text-sidebar-accent transition-colors"
                                >
                                    <FontAwesomeIcon icon={item.icon} className="h-10 w-10" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                    <hr className="my-8 w-full" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-semibold text-sidebar-foreground mb-2">Quick Links</h3>
                            <div className="space-y-2">
                                {["Home", "Community", "Resources", "Events", "About Us"].map((link) => (
                                    <motion.div
                                        key={link}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <a
                                            href="#"
                                            className="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors text-sm"
                                        >
                                            {link}
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Resources */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-semibold text-sidebar-foreground mb-2">Resources</h3>
                            <div className="space-y-2">
                                {["Guides", "Research", "Tools", "Market Data", "Support"].map((link) => (
                                    <motion.div
                                        key={link}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <a
                                            href="#"
                                            className="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors text-sm"
                                        >
                                            {link}
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Newsletter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-semibold text-sidebar-foreground mb-2">Stay Updated</h3>
                            <p className="text-sidebar-foreground/80 text-sm mb-2">
                                Get the latest agricultural insights and community updates.
                            </p>
                            <div className="space-y-2">
                                <Input type="email" placeholder="Enter your email" className="bg-background border-sidebar-border" style={{ outline: 'none', boxShadow: 'none' }}
                                onFocus={(e) => {
                                    e.currentTarget.style.outline = 'none'
                                    e.currentTarget.style.boxShadow = 'none'
                                }} />
                                <Button className="w-full cursor-pointer" size="sm">
                                    <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                                        <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-2" />
                                    </motion.span>
                                    Subscribe
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="border-t border-sidebar-border mt-12 pt-8 text-center"
                    >
                        <p className="text-sidebar-foreground/60 text-sm">
                            © 2025 KrishiKalp. All rights reserved. Built with passion for sustainable agriculture.
                        </p>
                    </motion.div>
                </div>
            </footer>
        </>
    )
}

export default Footer
