import * as React from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux'
import voteHistory from '../../models/voteHistory';
import './index.scss';
import { decCounter } from '../../store/actions/counterActions';
import { deleteVote } from '../../store/actions/historyActions';

interface HistoryProps{
    voteHistory: voteHistory[],
    deleteVote: any,
    decrementVote: any
}

class History extends React.Component<HistoryProps,{}>{

    handleDeleteVote = (vote:string, id:string) => {
        this.props.deleteVote(vote,id);
        this.props.decrementVote(vote);
    }
    render () {
        return <div className="history">
            { this.props.voteHistory.map((i: any, x: number)=>{
                    return <div><p key={x}>{i.vote} -> {i.date}</p> <Icon onClick={() => this.handleDeleteVote(i.vote,i.id)} type="delete" /> </div>
            }) }
        </div>
    }
}

const mapStateToProps = (state:any) => {
    return {
        voteHistory: state.archive.history
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        deleteVote: (selected:string, idToDelete:string) => dispatch(deleteVote(selected,idToDelete)),
        decrementVote: (selected:string) => dispatch(decCounter(selected))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);