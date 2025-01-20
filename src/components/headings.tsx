import { ReactElement } from "react";
import { Button } from './ui/button';
import { TbBook2, TbBrandReact, TbWorldWww } from "react-icons/tb";
import { useNavigate } from '@tanstack/react-router';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTranslation } from "@/hooks/useTranslation";

export function Headings() {
    return (
        <div id='headings'>
            <HeadingSelections />
            <HeadingDescription />
        </div>
    );
}

function HeadingDescription() {
    const { t } = useTranslation();
    return <section id="description" className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t('indexHeadingTitle')}</h2>
                <p className="mb-4">{t('indexHeadingDescription')}</p>
                <p>{t('indexHeadingDescription2')}</p>
                <a href="https://github.com/pstawekl" target="_blank">
                    <Button className="mt-4" variant={'interactive'}>{t('checkProjects')}</Button>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="https://media.istockphoto.com/id/910422618/photo/software-developer.jpg?s=612x612&w=0&k=20&c=SduSASqZPraf18Whb6p1Ki1tTS5QWsgPxiCbLrHYzkc=" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://img.freepik.com/free-photo/data-server-racks-hub-room-with-big-data-computer-center-blue-interior-hosting-storage-hardware_90220-1033.jpg?semt=ais_hybrid" alt="office content 2" />
            </div>
        </div>
    </section>
}

function HeadingSelections() {
    const { t } = useTranslation();
    return <section id="offer" className='bg-white dark:bg-gray-900 m-8'>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t('indexHeadingSelectionsTitle')}</h2>
            <div className="gap-10 flex flex-col lg:flex-row items-center justify-center">
                <SelectionPick
                    title={t('onlineStore')}
                    description={t('indexHeadingSelections1Description')}
                    price={1699}
                    side="right"
                    icon={<TbWorldWww size={50} />}
                    link={'/ecommerce'}
                />
                <SelectionPick
                    width="w-90"
                    title={t('webApplications')}
                    description={t('indexHeadingSelections2Description')}
                    side='center'
                    price={999}
                    icon={<TbBrandReact size={50} />}
                    link={'/www'}
                />
                <SelectionPick
                    title={t('courses')}
                    description={t('indexHeadingSelections3Description')}
                    side='left'
                    price={999}
                    icon={<TbBook2 size={50} />}
                    link={"/courses"}
                />
            </div>
        </div>
    </section>
}

function SelectionPick({ width, title, description, price, side, icon, link, tooltip }: { width?: string, title: string, description: string, price: number, side: 'left' | 'center' | 'right', icon?: ReactElement, link?: string, tooltip?: string }) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className={`border rounded-lg max-w-[400px] flex flex-col gap-4 p-5 overflow-hidden
         ${link && "lg:hover:scale-105 transition-transform duration-300"} bg-white dark:bg-gray-800 shadow-lg justify-items-center text-center
         ${width ? ` ${width}` : "w-80"} 
         ${side == "right" ? 'lg:text-right lg:justify-items-end' :
                side == 'left' ? 'lg:text-left lg:justify-items-start' :
                    'lg:text-center lg:justify-items-center'}`}>

            <div className="transition-opacity duration-300 selection-pick-hover"></div>
            <h3 className={`text-xl tracking-tight font-extrabold text-gray-900 dark:text-white`}>{title}</h3>
            {icon && <div className={"flex flex-row text-white-900 justify-center " + ` ${side == "right" ? "lg:justify-end" : side == "left" ? "lg:justify-start" : "lg:justify-center"}`}>{icon}</div>}
            <span className='text-xl font-bold'>od {price} zł</span>
            <p>{description}</p>
            {!link &&
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant={'interactive'}>Sprawdź</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            {tooltip}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            }
            {
                link &&
                <Button variant={'interactive'} onClick={() => navigate({ to: link })}>{t('check')}</Button>
            }
        </div>
    );
}