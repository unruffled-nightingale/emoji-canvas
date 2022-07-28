import examples from '../../resources/data/examples.json'
import File from './File'

const EXAMPLES = examples;

type GalleryProps = {
    setCanvasPreview: (x: string | undefined) => void
    setCanvas: (x: string) => void
}

export const Gallery = ({setCanvas, setCanvasPreview}: GalleryProps) => {

    return (
        <>
            {EXAMPLES.map(f => <File name={f['filename'].replaceAll("_", " ")}
                                     onFileMouseDown={() => setCanvas(f['text'])}
                                     onFileMouseOver={() => setCanvasPreview(f['text'])}
                                     onFileMouseOut={() => setCanvasPreview(undefined)}/>)}
        </>
    )
}