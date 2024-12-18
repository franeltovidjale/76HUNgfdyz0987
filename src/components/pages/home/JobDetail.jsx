import React from 'react';
import {
  Calendar,
  MapPin,
  Clock,
  Building,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Briefcase,
  DollarSign
} from 'lucide-react';

const JobDetail = () => {
  const jobInfo = {
    title: "Senior UX Designer",
    labels: ["Featured", "Full Time"],
    company: {
      name: "Instagram",
      logo: "/api/placeholder/64/64",
      description: "Social networking service",
      foundedDate: "March 21, 2006",
      type: "Private Company",
      size: "120-300 Employees",
      contact: {
        phone: "(406) 555-0120",
        email: "twitter@gmail.com",
        website: "https://twitter.com"
      }
    },
    overview: {
      postedDate: "14 June, 2021",
      deadline: "14 July, 2021",
      education: "Graduation",
      salary: "$50k-60k/month",
      location: "New York, USA",
      jobType: "Full Time",
      experience: "10-15 Years"
    }
  };

  const overviewItems = [
    { label: 'SALARY', value: jobInfo.overview.salary, icon: <DollarSign className="w-5 h-5 text-gray-600" /> },
    { label: 'LOCATION', value: jobInfo.overview.location, icon: <MapPin className="w-5 h-5 text-gray-600" /> },
    { label: 'JOB TYPE', value: jobInfo.overview.jobType, icon: <Briefcase className="w-5 h-5 text-gray-600" /> },
    { label: 'EXPERIENCE', value: jobInfo.overview.experience, icon: <Clock className="w-5 h-5 text-gray-600" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Company Logo */}
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 flex-shrink-0">
              <img src={jobInfo.company.logo} alt={jobInfo.company.name} className="w-full h-full object-cover" />
            </div>
            
            {/* Job Title and Company Info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                <h1 className="text-xl font-semibold text-gray-900">{jobInfo.title}</h1>
                <div className="flex flex-wrap gap-2">
                  {jobInfo.labels.map((label, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        label === "Featured" ? "bg-purple-100 text-purple-600" : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">https://instagram.com</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{jobInfo.company.contact.phone}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Button */}
          <button className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 font-medium">
            <span>Apply Now</span>
            <span className="text-xs">→</span>
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Description */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Description */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Job Description</h2>
              <div className="prose prose-sm max-w-none text-gray-600">
                <p>Integer aliquet pretium consequat. Donec et sapien et leo accumsan pellentesque eget maximus tellus. Duis est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer feugiat blandit sollicitudin.</p>
                <p className="mt-4">Vivamus sit amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque et amet aliquam urna. Maecenas blandit felis at massa sodales facilisis. Integer eleifend elit vitae nisi eu sollicitudin.</p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 flex-shrink-0"></span>
                  <span>Quisque semper gravida est sit consectetur.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 flex-shrink-0"></span>
                  <span>Curabitur blandit tempus velit, vitae gravida leo placerat eget.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 flex-shrink-0"></span>
                  <span>Morbi mattis in ipsum ac tempus.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Overview */}
          <div className="space-y-6">
            {/* Job Overview */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Job Overview</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Posted Date */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">POSTED DATE</p>
                      <p className="text-sm font-medium">{jobInfo.overview.postedDate}</p>
                    </div>
                  </div>

                  {/* Deadline */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">DEADLINE</p>
                      <p className="text-sm font-medium">{jobInfo.overview.deadline}</p>
                    </div>
                  </div>
                </div>

                {/* Other Overview Items */}
                <div className="space-y-4">
                  {overviewItems.map(({ label, value, icon }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                        {icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{label}</p>
                        <p className="text-sm font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <div className="flex items-center gap-4 mb-6">
                <img src={jobInfo.company.logo} alt={jobInfo.company.name} className="w-12 h-12 rounded-lg" />
                <div>
                  <h3 className="text-lg font-semibold">{jobInfo.company.name}</h3>
                  <p className="text-sm text-gray-600">{jobInfo.company.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Founded in:', value: jobInfo.company.foundedDate },
                  { label: 'Organization type:', value: jobInfo.company.type },
                  { label: 'Company size:', value: jobInfo.company.size },
                  { label: 'Phone:', value: jobInfo.company.contact.phone },
                  { label: 'Email:', value: jobInfo.company.contact.email },
                  { label: 'Website:', value: jobInfo.company.contact.website }
                ].map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between text-sm gap-1">
                    <span className="text-gray-500">{item.label}</span>
                    <span className="text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-gray-600" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;