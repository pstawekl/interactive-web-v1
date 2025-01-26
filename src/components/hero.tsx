import Logo from '../assets/logo.png';
import { Button } from './ui/button';

export function Hero() {
    return <div id="banner" className="hero overflow-hidden text-white flex flex-col lg:flex-row gap-8 items-startt justify-center min-h-[80vh]">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='select-none max-w-[400px] lg:max-w-[1000px] flex flex-col justify-center items-start ml-auto mr-auto text-left gap-3'>
                <div className='flex justify-start items-center text-4xl'>
                    <img src={Logo} draggable="false" alt="Interactive Logo horizontal" width="40px" />olunteer Me
                </div>
                <h1 className="text-4xl font-bold">Usprawniamy akcję charytatywne</h1>
                <p className="text-lg">Platforma do organizacji wolontariatów.</p>
                <div className='flex flex-row gap-4 mt-4'>
                    <Button variant={'interactive'} onClick={() => document.getElementById("description")?.scrollIntoView({ behavior: "smooth", block: 'end' })}>Dowiedz się więcej</Button>
                    <Button variant={'outline'} size={'md'} onClick={() => document.getElementById("join-us")?.scrollIntoView({ behavior: "smooth", block: 'end' })}>Dołącz do nas</Button>
                </div>
            </div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Volunteer"
                />
            </div>
        </div>
    </div>;
}
