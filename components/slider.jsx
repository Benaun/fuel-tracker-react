import { Carousel, Typography } from "@material-tailwind/react";

export function Slider() {
    return (
        <Carousel className="rounded-xl h-5/6">
            <img
                src="/cars/Coolray.png"
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src="/cars/Coolray.png"
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src="/cars/Coolray.png"
                alt="image 3"
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}