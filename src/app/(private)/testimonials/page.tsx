'use client';
import { useState } from 'react';
import { Plus, Trash2, Eye, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { FormCard } from '@/components/screen/FormCard';
import { FileUpload } from '@/components/screen/FileUpload';

interface Testimonial {
  id: string;
  name: string;
  designation: string;
  relation: string;
  quote: string;
  photo: File | null;
  rating: number;
}

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      name: 'John Smith',
      designation: 'CTO at TechCorp',
      relation: 'Manager',
      quote:
        'Abhishek is an exceptional developer with great problem-solving skills and attention to detail.',
      photo: null,
      rating: 5,
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      designation: 'Product Manager',
      relation: 'Client',
      quote:
        'Working with Abhishek was a pleasure. He delivered high-quality work on time and exceeded expectations.',
      photo: null,
      rating: 5,
    },
  ]);

  const [selectedTestimonial, setSelectedTestimonial] = useState<string | null>(
    testimonials[0]?.id || null,
  );
  const [showPreview, setShowPreview] = useState(false);

  const addTestimonial = () => {
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name: '',
      designation: '',
      relation: '',
      quote: '',
      photo: null,
      rating: 5,
    };
    setTestimonials([...testimonials, newTestimonial]);
    setSelectedTestimonial(newTestimonial.id);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateTestimonial = (id: string, field: keyof Testimonial, value: any) => {
    setTestimonials(
      testimonials.map((test) => (test.id === id ? { ...test, [field]: value } : test)),
    );
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter((test) => test.id !== id));
    if (selectedTestimonial === id) {
      setSelectedTestimonial(testimonials[0]?.id || null);
    }
  };

  const currentTestimonial = testimonials.find((t) => t.id === selectedTestimonial);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl text-white">Testimonials</h2>
          <p className="mt-1 text-sm text-slate-400">Manage client and colleague testimonials</p>
        </div>
        <div className="flex gap-3">
          <motion.button
            onClick={() => setShowPreview(!showPreview)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-300 transition-colors hover:bg-purple-500/30"
          >
            <Eye className="h-4 w-4" />
            {showPreview ? 'Hide' : 'Show'} Carousel
          </motion.button>
          <motion.button
            onClick={addTestimonial}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-cyan-300 transition-colors hover:bg-cyan-500/30"
          >
            <Plus className="h-4 w-4" />
            Add Testimonial
          </motion.button>
        </div>
      </div>

      {showPreview && (
        <FormCard>
          <h3 className="mb-4 text-lg text-white">Testimonial Cards Preview</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 text-white">
                    {testimonial.name ? testimonial.name.charAt(0).toUpperCase() : '?'}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white">{testimonial.name || 'Name'}</h4>
                    <p className="text-sm text-cyan-400">
                      {testimonial.designation || 'Designation'}
                    </p>
                    <p className="text-xs text-slate-500">{testimonial.relation || 'Relation'}</p>
                  </div>
                </div>
                <p className="mb-3 text-sm text-slate-300 italic">{testimonial.quote || 'Quote'}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FormCard>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Testimonial List */}
        <div className="lg:col-span-1">
          <FormCard>
            <h3 className="mb-4 text-white">Testimonials</h3>
            <div className="space-y-2">
              {testimonials.map((testimonial) => (
                <motion.button
                  key={testimonial.id}
                  onClick={() => setSelectedTestimonial(testimonial.id)}
                  whileHover={{ x: 4 }}
                  className={`w-full rounded-xl px-4 py-3 text-left transition-all ${
                    selectedTestimonial === testimonial.id
                      ? 'border border-cyan-500/30 bg-cyan-500/20 text-white'
                      : 'border border-white/10 bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <p className="truncate text-sm">{testimonial.name || 'New Testimonial'}</p>
                  <p className="truncate text-xs text-slate-500">{testimonial.designation}</p>
                </motion.button>
              ))}
            </div>
          </FormCard>
        </div>

        {/* Testimonial Form */}
        <div className="lg:col-span-3">
          {currentTestimonial && (
            <FormCard>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl text-white">Edit Testimonial</h3>
                <motion.button
                  onClick={() => deleteTestimonial(currentTestimonial.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-lg border border-red-500/30 bg-red-500/20 p-2 text-red-400 transition-colors hover:bg-red-500/30"
                >
                  <Trash2 className="h-4 w-4" />
                </motion.button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Person Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={currentTestimonial.name}
                      onChange={(e) =>
                        updateTestimonial(currentTestimonial.id, 'name', e.target.value)
                      }
                      placeholder="e.g., John Smith"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Designation / Company <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={currentTestimonial.designation}
                      onChange={(e) =>
                        updateTestimonial(currentTestimonial.id, 'designation', e.target.value)
                      }
                      placeholder="e.g., CTO at TechCorp"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-400">Relation</label>
                  <select
                    value={currentTestimonial.relation}
                    onChange={(e) =>
                      updateTestimonial(currentTestimonial.id, 'relation', e.target.value)
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                  >
                    <option value="">Select relation</option>
                    <option value="Manager">Manager</option>
                    <option value="Client">Client</option>
                    <option value="Colleague">Colleague</option>
                    <option value="Team Lead">Team Lead</option>
                    <option value="Mentor">Mentor</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    Quote / Testimonial <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    value={currentTestimonial.quote}
                    onChange={(e) =>
                      updateTestimonial(currentTestimonial.id, 'quote', e.target.value)
                    }
                    placeholder="What did they say about you? (Max 200 characters)"
                    rows={4}
                    maxLength={200}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                  />
                  <div className="mt-2 flex justify-between">
                    <p className="text-xs text-slate-500">Keep it concise and impactful</p>
                    <p className="text-xs text-slate-500">{currentTestimonial.quote.length}/200</p>
                  </div>
                </div>

                <FileUpload
                  label="Photo (Optional)"
                  accept="image/*"
                  onChange={(file) => updateTestimonial(currentTestimonial.id, 'photo', file)}
                />

                <div>
                  <label className="mb-2 block text-sm text-slate-400">Star Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <motion.button
                        key={rating}
                        type="button"
                        onClick={() => updateTestimonial(currentTestimonial.id, 'rating', rating)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2"
                      >
                        <Star
                          className={`h-8 w-8 transition-colors ${
                            rating <= currentTestimonial.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-600 hover:text-slate-500'
                          }`}
                        />
                      </motion.button>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Selected: {currentTestimonial.rating}/5 stars
                  </p>
                </div>
              </div>
            </FormCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
