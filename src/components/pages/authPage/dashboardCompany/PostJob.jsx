



import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
    Bold, 
    Italic, 
    List, 
    Link,
    AlignLeft, 
    AlignCenter, 
    AlignRight,
    Briefcase,
    Tags,
    DollarSign,
    Calendar,
    GraduationCap,
    Clock,
    Building,
    Users,
    FileText,
    CheckCircle,
    Award,
    Settings,
    AlertCircle,
    Eye,
    Send,
    ChevronDown  // Ajout de cette icône aussi
  } from 'lucide-react';
// Les constantes restent les mêmes...

const JobPost = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [description, setDescription] = useState('');
  const [responsibilities, setResponsibilities] = useState('');

  // Options pour les différents select
  const educationLevels = ["Bac", "Bac+2", "Bac+3/Licence", "Bac+5/Master", "Doctorat"];
  const experienceLevels = ["< 1 an", "1-2 ans", "2-5 ans", "5-10 ans", "> 10 ans"];
  const jobTypes = ["CDI", "CDD", "Freelance", "Stage", "Alternance"];
  const jobLevels = ["Débutant", "Intermédiaire", "Sénior", "Manager", "Directeur"];

  const onSubmit = (data) => {
    const formData = {
      ...data,
      description,
      responsibilities,
      minSalary,
      maxSalary
    };
    console.log(formData);
  };
    
  // Les hooks et états restent les mêmes...

  // Modifier le TextEditor pour inclure une bordure colorée
  const TextEditor = ({ id, value, onChange, placeholder, icon: Icon }) => (
    <div className="border-2 border-gray-200 hover:border-indigo-200 transition-colors duration-200 rounded-lg overflow-hidden">
      <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
        <button type="button" className="p-1.5 hover:bg-indigo-50 rounded text-gray-600 hover:text-indigo-600 transition-colors">
          <Bold className="w-4 h-4" />
        </button>
        <button type="button" className="p-1.5 hover:bg-indigo-50 rounded text-gray-600 hover:text-indigo-600 transition-colors">
          <Italic className="w-4 h-4" />
        </button>
        <button type="button" className="p-1.5 hover:bg-indigo-50 rounded text-gray-600 hover:text-indigo-600 transition-colors">
          <List className="w-4 h-4" />
        </button>
        <span className="w-px h-4 bg-gray-300" />
        <button type="button" className="p-1.5 hover:bg-indigo-50 rounded text-gray-600 hover:text-indigo-600 transition-colors">
          <AlignLeft className="w-4 h-4" />
        </button>
        <button type="button" className="p-1.5 hover:bg-indigo-50 rounded text-gray-600 hover:text-indigo-600 transition-colors">
          <AlignCenter className="w-4 h-4" />
        </button>
        <button type="button" className="p-1.5 hover:bg-indigo-50 rounded text-gray-600 hover:text-indigo-600 transition-colors">
          <AlignRight className="w-4 h-4" />
        </button>
      </div>
      <div className="flex">
        <div className="p-4 bg-gray-50 border-r border-gray-200">
          <Icon className="w-5 h-5 text-gray-400" />
        </div>
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full min-h-[200px] p-4 bg-white focus:ring-0 border-none"
        />
      </div>
    </div>
  );

  const InputWithIcon = ({ icon: Icon, label, required, error, ...props }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative rounded-lg shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          {...props}
          className="block w-full pl-10 pr-3 py-2.5 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );

  const SelectWithIcon = ({ icon: Icon, label, options, ...props }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative rounded-lg shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <select
          {...props}
          className="block w-full pl-10 pr-10 py-2.5 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors appearance-none"
        >
          <option value="">Sélectionner...</option>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* En-tête avec style amélioré */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <Briefcase className="h-6 w-6 text-indigo-600" />
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Publier une offre d'emploi
            </h1>
          </div>
          <p className="text-gray-600 ml-11">
            Créez une offre attractive pour trouver les meilleurs talents
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Informations principales */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-5 w-5 text-indigo-500" />
              <h2 className="text-lg font-medium text-gray-900">Informations principales</h2>
            </div>
            
            <div className="space-y-6">
              <InputWithIcon
                icon={Briefcase}
                label="Titre du poste"
                type="text"
                placeholder="Ex: Développeur Full Stack JavaScript"
                required
                {...register('jobTitle', { required: true })}
                error={errors.jobTitle && "Ce champ est requis"}
              />

              <InputWithIcon
                icon={Tags}
                label="Mots-clés"
                type="text"
                placeholder="React, Node.js, TypeScript..."
                {...register('tags')}
              />
            </div>
          </div>

          {/* Rémunération avec design amélioré */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="h-5 w-5 text-green-500" />
              <h2 className="text-lg font-medium text-gray-900">Rémunération</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Ajouter les inputs de salaire avec icônes... */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Salaire minimum
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">€</span>
                  </div>
                  <input
                    type="number"
                    className="block w-full pl-8 pr-12 py-2.5 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={minSalary}
                    onChange={(e) => setMinSalary(e.target.value)}
                    placeholder="30000"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Salaire maximum
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">€</span>
                  </div>
                  <input
                    type="number"
                    className="block w-full pl-8 pr-12 py-2.5 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={maxSalary}
                    onChange={(e) => setMaxSalary(e.target.value)}
                    placeholder="45000"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <SelectWithIcon
                icon={Settings}
                label="Type de salaire"
                options={['Annuel', 'Mensuel', 'Journalier', 'Horaire']}
                {...register('salaryType')}
              />
            </div>
          </div>

          {/* Critères avec design amélioré */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <h2 className="text-lg font-medium text-gray-900">Critères du poste</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectWithIcon
                icon={GraduationCap}
                label="Niveau d'études"
                options={educationLevels}
                {...register('education')}
              />

              <SelectWithIcon
                icon={Award}
                label="Expérience requise"
                options={experienceLevels}
                {...register('experience')}
              />

              <SelectWithIcon
                icon={Building}
                label="Type de contrat"
                options={jobTypes}
                {...register('jobType')}
              />

              <SelectWithIcon
                icon={Award}
                label="Niveau du poste"
                options={jobLevels}
                {...register('jobLevel')}
              />

              <InputWithIcon
                icon={Users}
                label="Nombre de postes"
                type="number"
                min="1"
                placeholder="1"
                {...register('vacancies')}
              />

              <InputWithIcon
                icon={Calendar}
                label="Date limite"
                type="date"
                {...register('expirationDate')}
              />
            </div>
          </div>

          {/* Description et responsabilités avec design amélioré */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-5 w-5 text-purple-500" />
              <h2 className="text-lg font-medium text-gray-900">Description et responsabilités</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description du poste
                </label>
                <TextEditor
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Décrivez le poste en détail..."
                  icon={FileText}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Responsabilités
                </label>
                <TextEditor
                  id="responsibilities"
                  value={responsibilities}
                  onChange={(e) => setResponsibilities(e.target.value)}
                  placeholder="Listez les principales responsabilités..."
                  icon={CheckCircle}
                />
              </div>
            </div>
          </div>

          {/* Boutons d'action avec style amélioré */}
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
            >
              <Eye className="h-5 w-5" />
              Aperçu
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors duration-200 flex items-center gap-2"
            >
              <Send className="h-5 w-5" />
              Publier l'offre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPost;
