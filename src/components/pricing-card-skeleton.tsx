export const PricingCardSkeleton = ({className}:{className?: string}) => {
    return <div className={"border rounded-lg p-6 shadow-md flex flex-col bg-white dark:bg-gray-800 hover:border-white " + className}></div>;
}