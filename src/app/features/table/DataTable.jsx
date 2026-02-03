import React, { useState, useMemo } from 'react';
import TableRow from './TableRow';
import EmptyState from '../../../shared/ui/EmptyState';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

const DataTable = ({ columns, data, loading, ...props }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [selectedRows, setSelectedRows] = useState(new Set());

  // Sorting Logic
  const sortedData = useMemo(() => {
    if (!data) return []; // Handle null data inside hook
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Loading State
  if (loading) {
    return (
      <div className="w-full h-64 flex items-center justify-center border border-border rounded-lg bg-card shadow-sm">
        <div className="text-muted-foreground animate-pulse">Getting things ready...</div>
      </div>
    );
  }

  // Selection Logic
  const toggleSelectAll = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(data.map(row => row.id)));
    }
  };

  const toggleSelectRow = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  if (!data || data.length === 0) {
    return (
      <EmptyState 
        title="No channels yet"
        description="Channels are where conversations happen. Create one to get started."
        actionLabel="Create channel"
        onAction={() => console.log('Create channel clicked')} // Placeholder or reuse prop if available
      />
    );
  }

  return (
    <div className="w-full overflow-x-auto border border-border rounded-lg bg-card shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-muted/30 text-muted-foreground text-[11px] uppercase font-bold tracking-wider">
          <tr>
            <th className="p-4 w-10 border-b border-border/50">
              <input 
                type="checkbox" 
                checked={data.length > 0 && selectedRows.size === data.length}
                onChange={toggleSelectAll}
                className="rounded border-border w-4 h-4 accent-primary cursor-pointer"
                aria-label="Select all rows"
              />
            </th>
            {columns.map((col) => (
              <th 
                key={col.key} 
                className="p-4 border-b border-border cursor-pointer hover:text-foreground transition-colors select-none whitespace-nowrap"
                onClick={() => handleSort(col.key)}
                scope="col"
                aria-sort={
                  sortConfig.key === col.key 
                    ? (sortConfig.direction === 'asc' ? 'ascending' : 'descending') 
                    : 'none'
                }
              >
                <button 
                  className="flex items-center gap-1 w-full h-full text-left" 
                  aria-label={`Sort by ${col.label}`}
                >
                  {col.label}
                  {sortConfig.key === col.key ? (
                    sortConfig.direction === 'asc' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />
                  ) : (
                    <ArrowUpDown className="w-3 h-3 opacity-30" />
                  )}
                </button>
              </th>
            ))}
            <th className="p-4 w-10 border-b border-border" aria-label="Actions"></th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <TableRow 
              key={row.id} 
              row={row} 
              isSelected={selectedRows.has(row.id)}
              onSelect={toggleSelectRow}
              onEdit={props.onEdit}
              onDelete={props.onDelete}
              onStatusChange={props.onStatusChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
