type Props = {
    title: string;
    mark: string;
}

export function Title({title, mark}: Props) {
    return (
        <h1 className="bg-clip-text text-transparent text-4xl lg:text-6xl bg-gradient-to-r from-[#FFFFFF] to-[#999999] font-medium max-w-[816px] text-center">
        {title}<span className="text-[#1D0DB1]"> {mark}</span>
        </h1>
    )
}