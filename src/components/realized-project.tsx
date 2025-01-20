export const RealizedProject = ({ name, description, link }: { name: string, description: string, link?: string }) => {
    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="border-l-4 border-primary pl-4 relative overflow-hidden group hover:rounded">
                    <div className="absolute inset-0 bg-gray-300 dark:bg-gray-800 transition-transform duration-300 -translate-x-full group-hover:translate-x-0 -z-10 group-hover:text-white"></div>
                    <h4 className="font-semibold">{name}</h4>
                    <p className="text-gray-600">{description}</p>
                </div>
            </a>
        );
    }
    return (
        <div className="border-l-4 border-primary pl-4 relative overflow-hidden group hover:rounded">
            <div className="absolute inset-0 bg-gray-300 dark:bg-gray-800 transition-transform duration-300 -translate-x-full group-hover:translate-x-0 -z-10"></div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}