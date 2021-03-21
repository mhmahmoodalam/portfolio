import axios from 'axios'
import fileDownload from 'js-file-download'
import MyResume from "../assets/Resume_Muhammed.pdf"
const handleDownload = () => {
    window.open(require(MyResume), '_none')
  }

export default handleDownload;