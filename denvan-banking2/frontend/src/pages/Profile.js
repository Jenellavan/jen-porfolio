import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { userService } from '../services/api';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await userService.getProfile();
      const profileData = response.data.data;
      
      setProfile(profileData);
      setFormData({
        firstName: profileData.firstName || '',
        lastName: profileData.lastName || '',
        phoneNumber: profileData.phoneNumber || '',
        address: {
          street: profileData.address?.street || '',
          city: profileData.address?.city || '',
          state: profileData.address?.state || '',
          zipCode: profileData.address?.zipCode || '',
          country: profileData.address?.country || ''
        }
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    setMessage({ type: '', text: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: '', text: '' });

    try {
      await userService.updateProfile(formData);
      setMessage({
        type: 'success',
        text: 'Profile updated successfully!'
      });
      fetchProfile(); // Refresh profile data
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Failed to update profile'
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-container">
          <div className="profile-header">
            <h1 className="profile-title">Profile Settings</h1>
            <p className="profile-subtitle">Manage your account information</p>
          </div>

          <div className="profile-content">
            {/* Account Info Card */}
            <div className="info-card">
              <h2 className="card-title">Account Information</h2>
              <div className="info-row">
                <span className="info-label">Email:</span>
                <span className="info-value">{profile?.email}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Member Since:</span>
                <span className="info-value">
                  {new Date(profile?.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">Account Status:</span>
                <span className={`status-badge ${profile?.isActive ? 'active' : 'inactive'}`}>
                  {profile?.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            {/* Edit Profile Form */}
            <div className="form-card">
              <h2 className="card-title">Edit Profile</h2>

              {message.text && (
                <div className={`alert alert-${message.type}`}>
                  {message.text}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-input"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-input"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="form-input"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>

                <h3 className="section-subtitle">Address</h3>

                <div className="form-group">
                  <label className="form-label">Street Address</label>
                  <input
                    type="text"
                    name="address.street"
                    className="form-input"
                    value={formData.address.street}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      name="address.city"
                      className="form-input"
                      value={formData.address.city}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      name="address.state"
                      className="form-input"
                      value={formData.address.state}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Zip Code</label>
                    <input
                      type="text"
                      name="address.zipCode"
                      className="form-input"
                      value={formData.address.zipCode}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      name="address.country"
                      className="form-input"
                      value={formData.address.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={saving}
                  style={{ width: '100%', marginTop: '24px' }}
                >
                  {saving ? 'Saving Changes...' : 'Save Changes'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
