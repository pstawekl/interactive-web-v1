import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslation } from "@/hooks/useTranslation";
import { useNavigate } from '@tanstack/react-router';
import { motion, useInView } from "framer-motion";
import { ReactElement, useRef } from "react";
import { TbBook2, TbBrandReact, TbWorldWww } from "react-icons/tb";
import { Button } from './ui/button';
import ScrollDownButton from "./ui/scroll-down-button";

export function Headings() {
    return (
        <div id='headings'>
            <HeadingSelections />
            <HeadingDescription />
        </div>
    );
}

function HeadingDescription() {
    const { t, ts } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "0px" });

    return (
        <section id="description" className="bg-gradient-to-b pb-20 from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden w-full">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 w-full">
                <motion.div
                    ref={ref}
                    className="font-light text-center lg:text-left text-gray-500 sm:text-lg dark:text-gray-400"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.h2
                        className="mb-4 pb-5 text-4xl tracking-tight font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {ts('indexHeadingTitle')}
                    </motion.h2>
                    <motion.p
                        className="mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {ts('indexHeadingDescription')}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {ts('indexHeadingDescription2')}
                    </motion.p>
                    <motion.a
                        href="https://github.com/pstawekl"
                        target="_blank"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button className="mt-4 mb-4 relative overflow-hidden group" variant={'interactive'}>
                            <span className="relative z-10">{ts('checkProjects')}</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                initial={false}
                            />
                        </Button>
                    </motion.a>
                </motion.div>
                <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        className="relative overflow-hidden rounded-lg shadow-xl group"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.img
                            className="w-full rounded-lg"
                            src="https://media.istockphoto.com/id/910422618/photo/software-developer.jpg?s=612x612&w=0&k=20&c=SduSASqZPraf18Whb6p1Ki1tTS5QWsgPxiCbLrHYzkc="
                            alt="Programista pracujący nad projektowaniem stron internetowych"
                            width={612}
                            height={612}
                            loading="lazy"
                            style={{ aspectRatio: '1/1' }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={false}
                        />
                    </motion.div>
                    <motion.div
                        className="mt-4 lg:mt-10 relative overflow-hidden rounded-lg shadow-xl group"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.img
                            className="w-full rounded-lg"
                            src="https://img.freepik.com/free-photo/data-server-racks-hub-room-with-big-data-computer-center-blue-interior-hosting-storage-hardware_90220-1033.jpg?semt=ais_hybrid"
                            alt="Serwerownia z infrastrukturą hostingową i przechowywaniem danych"
                            width={800}
                            height={600}
                            loading="lazy"
                            style={{ aspectRatio: '4/3' }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={false}
                        />
                    </motion.div>
                </motion.div>
            </div>
            <ScrollDownButton servicesInView={true} id="trust" />
        </section>
    );
}

function HeadingSelections() {
    const { t, ts } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "0px" });

    return (
        <section id="offer" className='bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 lg:py-24 overflow-hidden w-full'>
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6 w-full">
                <motion.h2
                    ref={ref}
                    className="mb-12 pb-5 text-4xl lg:text-5xl tracking-tight font-extrabold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                >
                    {ts('indexHeadingSelectionsTitle')}
                </motion.h2>
                <div className="gap-10 flex flex-col lg:flex-row items-center justify-center">
                    {[
                        { title: t('onlineStore'), description: t('indexHeadingSelections1Description'), price: 1699, side: "right" as const, icon: <TbWorldWww size={50} />, link: '/ecommerce', delay: 0.1 },
                        { title: t('webApplications'), description: t('indexHeadingSelections2Description'), price: 999, side: 'center' as const, icon: <TbBrandReact size={50} />, link: '/www', delay: 0.2 },
                        { title: t('courses'), description: t('indexHeadingSelections3Description'), price: 999, side: 'left' as const, icon: <TbBook2 size={50} />, link: "/courses", delay: 0.3 },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                            transition={{ delay: item.delay, duration: 0.6, type: "spring", stiffness: 100 }}
                        >
                            <SelectionPick
                                title={item.title.toString()}
                                description={item.description.toString()}
                                price={item.price}
                                side={item.side}
                                icon={item.icon}
                                link={item.link}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
            <ScrollDownButton servicesInView={isInView} id="description" />
        </section>
    );
}

function SelectionPick({ width, title, description, price, side, icon, link, tooltip }: { width?: string, title: string, description: string, price: number, side: 'left' | 'center' | 'right', icon?: ReactElement, link?: string, tooltip?: string }) {
    const { t, ts } = useTranslation();
    const navigate = useNavigate();

    return (
        <motion.div
            className={`border-2 border-gray-200 dark:border-gray-700 rounded-2xl max-w-[400px] flex flex-col gap-4 p-6 overflow-hidden relative group
             bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl justify-items-center text-center
             ${width ? ` ${width}` : "w-80"} 
             ${side == "right" ? 'lg:text-right lg:justify-items-end' :
                    side == 'left' ? 'lg:text-left lg:justify-items-start' :
                        'lg:text-center lg:justify-items-center'}`}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Animated gradient background on hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                initial={false}
            />

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/20 to-pink-600/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                initial={false}
            />

            <div className="relative z-10">
                <motion.h3
                    className={`text-2xl tracking-tight font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.05 }}
                >
                    {title}
                </motion.h3>

                {icon && (
                    <motion.div
                        className={"flex flex-row text-blue-600 dark:text-blue-400 justify-center mt-4 " + ` ${side == "right" ? "lg:justify-end" : side == "left" ? "lg:justify-start" : "lg:justify-center"}`}
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                    >
                        {icon}
                    </motion.div>
                )}

                <motion.span
                    className='text-2xl font-bold text-gray-900 dark:text-white mt-2 inline-block'
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    od{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {price} zł
                    </span>
                </motion.span>

                <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>

                {!link ? (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant={'interactive'} className="mt-4 relative overflow-hidden group/btn">
                                        <span className="relative z-10">Sprawdź</span>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"
                                            initial={false}
                                        />
                                    </Button>
                                </motion.div>
                            </TooltipTrigger>
                            <TooltipContent>
                                {tooltip}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ) : (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4">
                        <Button
                            variant={'interactive'}
                            onClick={() => navigate({ to: link })}
                            className="relative overflow-hidden group/btn"
                        >
                            <span className="relative z-10">{ts('check')}</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"
                                initial={false}
                            />
                        </Button>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}