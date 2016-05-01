import { PropTypes } from 'react';
import { DataTable, TableHeader } from 'react-mdl';

let CommitList = ({ commits }) => {
  return (
    <DataTable
      shadow={0}
      rows={commits}
    >
      <TableHeader name="date">Date</TableHeader>
      <TableHeader name="author">Author</TableHeader>
      <TableHeader name="message">Commit Message</TableHeader>
      <TableHeader name="id">ID</TableHeader>
    </DataTable>
  )
}

CommitList.proptypes = {
  commits: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default CommitList
