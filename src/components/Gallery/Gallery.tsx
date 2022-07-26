import examples from '../../resources/examples.json'
import File from './File'

const EXAMPLES = examples;

type GalleryProps = {
    setCanvasPreview: (x: string | undefined) => void
}

export const Gallery = ({setCanvasPreview}: GalleryProps) => {

    return (
        <>
            {EXAMPLES.map(f => <File name={f['filename'].replaceAll("_", " ")}
                                     onFileMouseOver={() => setCanvasPreview(f['text'])}
                                     onFileMouseOut={() => setCanvasPreview(undefined)}/>)}
        </>
    )
}