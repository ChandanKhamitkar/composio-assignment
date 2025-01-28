interface CardProps {
    svgPath: string,
    title: string,
    subtitle: string,
    expanded: boolean,
    maskPath?: string,
}

export default function InfoCard(props: CardProps) {
    return (
        <div className={`bg-white rounded-xl box-shadow-custom-1 border border-[#E4E5E1] box-shadow-custom-2 ${props.expanded ? "flex flex-col space-y-2 justify-between items-start pb-4 flex-grow" : "flex justify-start items-center space-x-6 h-fit px-6 py-6"}`}>

            {
                props.expanded && <img src={props.maskPath} alt="Squre Pattersn" className="w-full" />
            }

            <div className={`${props.expanded ? "flex justify-start items-start space-x-4 px-4" : "flex justify-start items-center space-x-4"}`}>
                <img src={props.svgPath} alt="Icon Svg" width={34} height={34} className="self-start"/>

                <div className="flex flex-col justify-start items-start space-y-1">
                    <p className="text-[var(--text-tertiary)] font-medium sm:text-base text-sm">{props.title}</p>

                    <p className="text-[var(--text-secondary)] sm:text-sm text-xs font-normal text-wrap">{props.subtitle}</p>
                </div>
            </div>
        </div>
    )
};
