import Quill from 'quill';
import './index.scss';

export default function loadEditor(id: string) {
    const q = new Quill(`#${id}`, {
        modules: {
            toolbar: true,
        },
        theme: 'bubble',
        placeholder: 'Compose an epic...',
    });

    return q;
}
