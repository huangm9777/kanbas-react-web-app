export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description"
        rows={5}
        cols={50}
        style={{ width: '50%', minHeight: '100px' }}>
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>     
      <table>     
       <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>    
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-assignment-group">
              <option>ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade">
              <option>Percentage</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option>Online</option>
            </select>
          </td>
        </tr>
      </table>
      
      <h3>Online Entry Options</h3>
      <div>
        <input type="checkbox" id="wd-text-entry" />
        <label htmlFor="wd-text-entry">Text Entry</label>
      </div>
      <div>
        <input type="checkbox" id="wd-website-url" />
        <label htmlFor="wd-website-url">Website URL</label>
      </div>
      <div>
        <input type="checkbox" id="wd-media-recordings" />
        <label htmlFor="wd-media-recordings">Media Recordings</label>
      </div>
      <div>
        <input type="checkbox" id="wd-student-annotation" />
        <label htmlFor="wd-student-annotation">Student Annotation</label>
      </div>
      <div>
        <input type="checkbox" id="wd-file-uploads" />
        <label htmlFor="wd-file-uploads">File Uploads</label>
      </div>
      
      <div>
        <label htmlFor="wd-assign-to">Assign </label>
        <input id="wd-assign-to" value="Everyone" />
      </div>
      
      <div>
        <label htmlFor="wd-due-date">Due </label>
        <input type="date" id="wd-due-date" value="2024-05-13" />
      </div>
      
      <div>
        <label>Available from </label>
        <input type="date" id="wd-available-from" value="2024-05-06" />
        <label > Until </label>
        <input type="date" id="wd-available-until" value="2024-05-20" />
      </div>
      
      <div>
        <button> Cancel </button>
        <button> Save </button>
      </div>
      </table>
    </div>
);}
