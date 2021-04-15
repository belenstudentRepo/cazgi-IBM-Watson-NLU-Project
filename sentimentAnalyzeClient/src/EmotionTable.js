import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          {/*You can remove this line and the line below. */}
          {JSON.stringify(this.props.emotions)}
          <table className="table table-bordered">
            <tbody>
            {
                //Write code to use the .map method that you worked on in the Hands-on React lab to extract the emotions
                // this.props.emotions.map(function(emotion){
                //     return <td>{emotion}</td>
                // })
                <td>{JSON.stringify(this.props.emotions)}</td>
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
