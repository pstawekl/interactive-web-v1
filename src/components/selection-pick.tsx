import { useNavigate } from "@tanstack/react-router";
import { ReactElement } from "react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface SelectionPickProps {
    width?: string;
    title: string;
    description: string;
    price?: number;
    side: 'left' | 'center' | 'right';
    icon?: ReactElement;
    link?: string;
    tooltip?: string;
    buttonCaption?: string;
}

export function SelectionPick({ width, title, description, price, side, icon, link, tooltip, buttonCaption }: SelectionPickProps) {
    const navigate = useNavigate();

    return (
        <div className={`border rounded-lg max-w-[400px] flex flex-col gap-4 p-5 overflow-hidden h-full
         ${link && "lg:hover:scale-105 transition-transform duration-300"} bg-white dark:bg-gray-800 shadow-lg justify-items-center text-center
         ${width ? ` ${width}` : "w-80"} 
         ${side == "right" ? 'lg:text-right lg:justify-items-end' :
                side == 'left' ? 'lg:text-left lg:justify-items-start' :
                    'lg:text-center lg:justify-items-center'}`}>

            <div className="transition-opacity duration-300 selection-pick-hover"></div>
            <h3 className={`text-xl tracking-tight font-extrabold text-gray-900 dark:text-white`}>{title}</h3>
            {icon && <div className={"flex flex-row text-white justify-center " + ` ${side == "right" ? "lg:justify-end" : side == "left" ? "lg:justify-start" : "lg:justify-center"}`}>{icon}</div>}
            {price && <span className='text-xl font-bold'>od {price} zł</span>}
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
                <Button variant={'interactive'} onClick={() => navigate({ to: link })}>{buttonCaption && buttonCaption != "" ? buttonCaption : "Sprawdź"}</Button>
            }
        </div>
    );
}