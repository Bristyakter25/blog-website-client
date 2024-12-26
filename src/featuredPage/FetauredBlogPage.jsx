import React, { useEffect, useState } from 'react';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
} from '@tanstack/react-table';

const FeaturedBlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs data
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          'https://blog-website-server-blush.vercel.app/addBlogs' 
        );
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();

        
        const sortedBlogs = data
          .map((blog) => ({
            ...blog,
            wordCount: blog.longDescription?.split(/\s+/).length || 0, // Calculate word count
          }))
          .sort((a, b) => b.wordCount - a.wordCount)
          .slice(0, 10);

        setBlogs(sortedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor('title', {
      header: 'Title',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('category', {
      header: 'Category',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('publishingYear', {
      header: 'Publishing Year',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('wordCount', {
      header: 'Word Count',
      cell: (info) => info.getValue(),
    }),
  ];

  // Create table instance
  const table = useReactTable({
    data: blogs,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='my-5'>
      <h2 className='text-center font-semibold text-3xl '>Featured Blogs</h2>
      <table style={{ border: '1px solid black', width: '100%', marginTop: '20px' }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{ padding: '10px', border: '1px solid black' }}
                >
                  {header.isPlaceholder
                    ? null
                    : header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{ padding: '10px', border: '1px solid black' }}
                >
                  {cell.getValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturedBlogPage;
