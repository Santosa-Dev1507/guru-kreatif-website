
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useProfile } from '@/hooks/useProfile';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ProfileEditModal from '@/components/ProfileEditModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { User, Mail, Phone, Edit, Calendar } from 'lucide-react';

const ProfileSettings = () => {
  const { user } = useAuth();
  const { profile, loading } = useProfile();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  if (!user) return null;

  const displayName = profile?.['full name'] || profile?.username || user.email?.split('@')[0] || 'User';
  const initials = displayName.split(' ').map(n => n.charAt(0)).join('').toUpperCase().slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Profile Settings
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
          </div>

          {/* Profile Card */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3">
                  <User className="w-5 h-5 text-blue-600" />
                  My Profile
                </CardTitle>
                <ProfileEditModal>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </ProfileEditModal>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {loading ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-16 w-16 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                  <Skeleton className="h-20 w-full" />
                </div>
              ) : (
                <>
                  {/* Avatar and Basic Info */}
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={profile?.avatar_url || ''} alt={displayName} />
                      <AvatarFallback className="text-lg">{initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div>
                        <h2 className="text-xl font-semibold text-slate-800">{displayName}</h2>
                        <p className="text-slate-600">@{profile?.username || 'no-username'}</p>
                      </div>
                      <Badge variant="secondary">
                        {profile?.role === 'admin' ? 'Administrator' : 'User'}
                      </Badge>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid gap-4">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <Mail className="w-5 h-5 text-slate-600" />
                      <div>
                        <p className="font-medium text-slate-800">Email</p>
                        <p className="text-sm text-slate-600">{user.email}</p>
                      </div>
                    </div>

                    {profile?.phone && (
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <Phone className="w-5 h-5 text-slate-600" />
                        <div>
                          <p className="font-medium text-slate-800">Phone</p>
                          <p className="text-sm text-slate-600">{profile.phone}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-slate-600" />
                      <div>
                        <p className="font-medium text-slate-800">Member Since</p>
                        <p className="text-sm text-slate-600">
                          {new Date(profile?.created_at || user.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  {profile?.bio && (
                    <div className="space-y-2">
                      <h3 className="font-medium text-slate-800">About</h3>
                      <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-3 rounded-lg">
                        {profile.bio}
                      </p>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
