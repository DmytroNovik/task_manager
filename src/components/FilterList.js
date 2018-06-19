import React from 'react';
import {connect} from 'react-redux';
import { Button, ButtonGroup, ButtonToolbar} from "react-bootstrap";

import {setVisibleList} from '../actions/TodoActions';

let FilterList = ({current,onFilterClick})=>{
    return (
        <div>
            Show :
            <ButtonToolbar>
                <ButtonGroup>
                    <Button bsStyle={current==="ALL"?"primary":"default"} onClick={()=>{return onFilterClick("SHOW_ALL")}}>All</Button>
                    <Button bsStyle={current==="COMPLETED"?"primary":"default"} onClick={()=>{return onFilterClick("SHOW_COMPLETED")}}>Completed</Button>
                    <Button bsStyle={current==="ACTIVE"?"primary":"default"} onClick={()=>{return onFilterClick("SHOW_ACTIVE")}}>Active</Button>
                    <Button bsStyle={current==="TODAY"?"primary":"default"} onClick={()=>{return onFilterClick("SHOW_TODAY")}}>Today</Button>
                    <Button bsStyle={current==="7DAYS"?"primary":"default"} onClick={()=>{return onFilterClick("SHOW_7DAYS")}}>Next 7 Days</Button>                    
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        current:state.filter
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onFilterClick: (filter)=>{
            dispatch(setVisibleList(filter));
        }
    }
}
FilterList = connect(mapStateToProps,mapDispatchToProps)(FilterList);
export default FilterList;