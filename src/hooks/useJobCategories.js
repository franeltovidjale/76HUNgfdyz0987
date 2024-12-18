// hooks/useCompanies.js
import { useState, useEffect } from 'react';
import {axiosClient} from '../axios';

export const useJobCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    total: 0
  });

  const fetchCompanies = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axiosClient.get(`/job_categories?page=${page}`);
      setCategories(response.data.data);
      setPagination({
        currentPage: response.data.meta.current_page,
        totalPages: response.data.meta.last_page,
        total: response.data.meta.total
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return { 
    categories, 
    loading, 
    error,
    pagination,
    fetchPage: fetchCompanies 
  };
};