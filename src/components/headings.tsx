import { BookUser } from "lucide-react";
import { IoIosPeople } from "react-icons/io";
import { SelectionPick } from "./selection-pick";
import { Button } from './ui/button';

export function Headings() {
    return (
        <div id='headings'>
            <HeadingDescription />
            <HeadingSelections />
        </div>
    );
}

function HeadingSelections() {
    return <section id="join-us" className='bg-white dark:bg-gray-900 m-8'>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Kim jesteś?</h2>
            <div className="gap-10 flex flex-col lg:flex-row items-start justify-center">
                <SelectionPick
                    title='Organizacja charytatywna'
                    description='Nasza platforma pozwoli Ci na tworzenie akcji charytatywnych, organizację naboru na akcję, zarządzanie wolontariuszami podczas akcji i przypisywanie ich do zadań, a także udostępnianie postów na profilu społecznościowym. Dzięki temu będziesz mógł skupić się na pomocy potrzebującym, a nie na administracji.'
                    side="center"
                    icon={<IoIosPeople size={50} />}
                    link={'/register?role=organization'}
                    buttonCaption={'Dołącz jako organizacja'}
                />
                <SelectionPick
                    title={'Wolontariusz'}
                    description='Dzięki naszej platformie będziesz mógł przeglądać dostępne akcje charytatywne, zgłaszać się na nie, zarządzać swoimi danymi osobowymi, a także komunikować się z organizatorami. Dzięki temu będziesz mógł skupić się na pomocy potrzebującym, a nie na administracji.'
                    side='center'
                    icon={<BookUser size={50} />}
                    link={'/register?role=volunteer'}
                    buttonCaption={'Dołącz jako wolontariusz'}
                />
            </div>
        </div>
    </section>
}

function HeadingDescription() {
    return <section id="description" className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Platforma łącząca wolontariuszy i organizacje</h2>
                <p className="mb-4">VolunteerMe to nowoczesna platforma, która ułatwia organizację i zarządzanie wolontariatem. Umożliwiamy skuteczną komunikację między organizacjami charytatywnymi a wolontariuszami, sprawiając, że pomaganie staje się prostsze i bardziej dostępne.</p>
                <p>Dzięki naszemu systemowi, organizacje mogą efektywnie zarządzać akcjami charytatywnymi, a wolontariusze łatwo znajdują możliwości pomocy, które najlepiej odpowiadają ich zainteresowaniom i dostępności.</p>
                <Button variant={'interactive'} className="mt-6" onClick={() => document.getElementById("join-us")?.scrollIntoView({ behavior: "smooth", block: 'end' })}>Dołącz do nas</Button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Volunteers helping" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1816&q=80" alt="Community work" />
            </div>
        </div>
    </section>
}