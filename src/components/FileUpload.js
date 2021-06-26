import React from 'react'
//import PropTypes from 'prop-types'
import axios from 'axios'

export class FileUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uploadStatus: false,
    }
    this.handleUploadImage = this.handleUploadImage.bind(this)
  }

  handleUploadImage(ev) {
    ev.preventDefault()

    const data = new FormData()
    data.append('file', this.uploadInput.files[0])
    data.append('filename', this.fileName.value)

    /** axios
      .post('//localhost:3000/upload', data)
      .then(function (response) {
        this.setState({
          // eslint-disable-next-line no-undef
          imageURL: `//localhost:3000/${body.file}`,
          uploadStatus: true,
        })
      })
      .catch(function (error) {
        console.log(error)
      })**/
  }

  render() {
    return (
      <div class="containerLoadFile">
        <form onSubmit={this.handleUpload}>
          <div className="formLoad-group">
            <input
              className="formLoad-control"
              ref={(ref) => {
                this.uploadInput = ref
              }}
              type="file"
            />
          </div>

          <div className="formLoad-group">
            <input
              className="formLoad-control"
              ref={(ref) => {
                this.fileName = ref
              }}
              type="text"
              placeholder="Optional name for the file"
            />
          </div>

          <button className="btn btn-success" type>
            Upload
          </button>
        </form>
      </div>
    )
  }
}

export default FileUpload
