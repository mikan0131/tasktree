import { TextBox } from "@/components/atoms/TextBox";
import Image from 'next/image'

export const Logo = () => {
    return (
        <TextBox fontSize={30} color='#000000' backgroundColor="transparent" >
            <Image 
                src='public/tasktree-logo.png'
                alt='TaskTree-logo'
                width={40}
                height={40}
            />
            TaskTree
        </TextBox>
    )
}