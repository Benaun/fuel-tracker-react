import { Carousel,Typography } from "@material-tailwind/react";

export function Slider() {
    return (
        <Carousel className="rounded-xl h-5/6">
            <div>
                <img
                    src="/cars/Coolray.png"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div>
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                        The Beauty of Nature
                    </Typography>
                </div>
            </div>

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