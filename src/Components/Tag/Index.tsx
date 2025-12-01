import { TagContainer } from "./style"

export type Props = {
    word: string
}


export const Tag = ({word}: Props) => (
    <TagContainer>
        <span>{word}</span>
    </TagContainer>
)

