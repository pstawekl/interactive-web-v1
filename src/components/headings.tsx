import React, { ReactElement, useEffect, useRef } from "react";
import { Button } from './ui/button';
import { TbBook2, TbBrandReact, TbWorldWww } from "react-icons/tb";
import { IconBase, IconType } from "react-icons";
import { Icon } from "lucide-react";

export function Headings() {
    return (
        <div id='headings'>
            <HeadingSelections />
            <HeadingDescription />
        </div>
    );
}

function HeadingDescription() {
    return <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Proste rozwiązania na skomplikowane problemy</h2>
                <p className="mb-4">Łączymy młodość z doświadczeniem. Dzięki temu dostarczamy innowacyjne rozwiązania. Nasze oprogramowania korzystają z najnowszych technologii. Dostarczamy bezpieczne i stabilne aplikacje, które spełnią wszelkie wymogi.</p>
                <p>Pracowaliśmy już nad rozwojem infrastruktury krytycznej kraju, a także nad jednym z najbardziej popularnych systemów ERP w Europie. Jesteśmy producentem godnym zaufania.</p>
                <Button variant={'interactive'}>Sprawdź nasze projekty</Button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="https://media.istockphoto.com/id/910422618/photo/software-developer.jpg?s=612x612&w=0&k=20&c=SduSASqZPraf18Whb6p1Ki1tTS5QWsgPxiCbLrHYzkc=" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://img.freepik.com/free-photo/data-server-racks-hub-room-with-big-data-computer-center-blue-interior-hosting-storage-hardware_90220-1033.jpg?semt=ais_hybrid" alt="office content 2" />
            </div>
        </div>
    </section>
}

function HeadingSelections() {
    return <section className='bg-white dark:bg-gray-900 m-8'>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Czego szukasz?</h2>
            <div className="gap-10 flex flex-col lg:flex-row items-center justify-center">
                <SelectionPick
                    title='Sklep internetowy'
                    description='Nasze sklepy internetowe pomogą Ci zwielokrotnić sprzedaż produktów. Są proste w obsłudze. Bez problemu możesz rozszerzyć asortyment, zaktualizować opis czy zmienić cenę.'
                    price={1699}
                    side="right"
                    icon={<TbWorldWww size={50} />}
                />
                <SelectionPick
                    width="w-90"
                    title={'Aplikacje internetowe'}
                    description='Nasze aplikacje internetowe są skrojone pod oczekiwania klienta. Niezależnie od tego jakiej aplikacji potrzebujesz, stworzymy ją. Posiadamy wieloletnie doświadczenie w tworzeniu aplikacji z zakresu infrastruktury krytycznej czy systemów ERP. Dzięki temu możemy stworzyć dowolną aplikację, która pomoże w rozwoju Twojej firmy.'
                    side='center'
                    price={1000}
                    icon={<TbBrandReact size={50} />}
                />
                <SelectionPick
                    title={'Szkolenia'}
                    description='Przeprowadzamy również szkolenia z zakresu bezpieczeństwa w IT, podstaw programowania, a także wykorzystania najnowszych rozwiązań informatycznych w Twojej firmie.'
                    side='left'
                    price={499}
                    icon={<TbBook2 size={50} />}
                />
            </div>
        </div>
    </section>
}

function SelectionPick({ width, title, description, price, side, icon }: { width?: string, title: string, description: string, price: number, side: 'left' | 'center' | 'right', icon?: ReactElement }) {
    return (
        <div className={`border rounded-lg max-w-[400px] flex flex-col gap-4 p-5 overflow-hidden
         hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-800 shadow-lg justify-items-center text-center
         ${width ? ` ${width}` : "w-80"} 
         ${side == "right" ? 'lg:text-right lg:justify-items-end' :
                side == 'left' ? 'lg:text-left lg:justify-items-start' :
                    'lg:text-center lg:justify-items-center'}`}>

            <div className="transition-opacity duration-300 selection-pick-hover"></div>
            <h3 className={`text-xl tracking-tight font-extrabold text-gray-900 dark:text-white`}>{title}</h3>
            {icon && <div className={"flex flex-row text-white justify-center " + ` ${side == "right" ? "lg:justify-end" : side == "left" ? "lg:justify-start" : "lg:justify-center"}`}>{icon}</div>}
            <span className='text-xl font-bold'>od {price} zł</span>
            <p>{description}</p>

            <Button variant={'interactive'}>Sprawdź</Button>
        </div>
    );
}