"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import {
  Shield,
  FileCode,
  Clock,
  DollarSign,
  Send,
  CheckCircle,
  Info,
  AlertCircle,
  Zap,
  X,
} from "lucide-react";

const auditFormSchema = z.object({
  projectName: z.string().min(2, "Project name must be at least 2 characters"),
  contractAddress: z.string().optional(),
  blockchain: z.string().min(1, "Please select a blockchain"),
  language: z.string().min(1, "Please select a language"),
  auditType: z.string().min(1, "Please select an audit type"),
  urgency: z.enum(["standard", "express", "emergency"]),
  budget: z.string().min(1, "Please select a budget range"),
  description: z
    .string()
    .min(50, "Please provide at least 50 characters of description"),
  contactName: z.string().min(2, "Name must be at least 2 characters"),
  contactEmail: z.string().email("Please enter a valid email"),
  contactTelegram: z.string().optional(),
  contactCompany: z.string().optional(),
});

type AuditFormData = z.infer<typeof auditFormSchema>;

const blockchains = [
  "Ethereum",
  "BSC",
  "Polygon",
  "Avalanche",
  "Solana",
  "Arbitrum",
  "Optimism",
  "Base",
  "Other",
];

const languages = ["Solidity", "Vyper", "Rust", "Move", "Cairo", "Other"];

const auditTypes = [
  "Full Security Audit",
  "Code Review Only",
  "Specific Vulnerability Check",
  "Gas Optimization",
  "Architecture Review",
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "Above $100,000",
];

export default function AuditRequestPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
    trigger,
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditFormSchema),
    mode: "onChange", // Enable real-time validation
  });

  // Function to validate current step before proceeding
  const validateCurrentStep = async () => {
    let fieldsToValidate: (keyof AuditFormData)[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = [
          "projectName",
          "blockchain",
          "language",
          "description",
        ];
        break;
      case 2:
        fieldsToValidate = ["auditType", "urgency", "budget"];
        break;
      case 3:
        fieldsToValidate = ["contactName", "contactEmail"];
        break;
    }

    const isValid = await trigger(fieldsToValidate);
    return isValid;
  };

  const urgency = watch("urgency");

  const onSubmit = async (data: AuditFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/audit-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(
          "Audit request submitted successfully! We'll contact you within 24 hours."
        );
        setShowSuccessModal(true);
        reset();
        setCurrentStep(1);
      } else {
        toast.error(
          result.error ||
            "Failed to send email. Please try again or contact us directly at support@fortknox-security.xyz"
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: "Project Details", icon: FileCode },
    { number: 2, title: "Audit Requirements", icon: Shield },
    { number: 3, title: "Contact Information", icon: Send },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg-radial" />
        <div className="absolute inset-0 hero-pattern opacity-5" />

        <div className="container mx-auto px-4 relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Request Your
              <span className="block gradient-text">Security Audit</span>
            </h1>
            <p className="text-xl text-gray-300">
              Get a comprehensive security audit from industry-leading experts.
              Fill out the form below and we'll contact you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                  // Check if current step has validation errors
                  const hasErrors = (() => {
                    switch (step.number) {
                      case 1:
                        return !!(
                          errors.projectName ||
                          errors.blockchain ||
                          errors.language ||
                          errors.description
                        );
                      case 2:
                        return !!(
                          errors.auditType ||
                          errors.urgency ||
                          errors.budget
                        );
                      case 3:
                        return !!(errors.contactName || errors.contactEmail);
                      default:
                        return false;
                    }
                  })();

                  return (
                    <React.Fragment key={step.number}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex flex-col items-center ${
                          currentStep >= step.number
                            ? hasErrors && currentStep === step.number
                              ? "text-red-400"
                              : "text-primary-400"
                            : "text-gray-500"
                        }`}
                      >
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all ${
                            currentStep >= step.number
                              ? hasErrors && currentStep === step.number
                                ? "bg-red-500/20 border-2 border-red-400"
                                : "bg-primary-500/20 border-2 border-primary-400"
                              : "bg-navy-800 border-2 border-gray-600"
                          }`}
                        >
                          {hasErrors && currentStep === step.number ? (
                            <AlertCircle className="w-6 h-6" />
                          ) : (
                            <step.icon className="w-6 h-6" />
                          )}
                        </div>
                        <span className="text-sm font-medium hidden sm:block">
                          {step.title}
                        </span>
                        {hasErrors && currentStep === step.number && (
                          <span className="text-xs text-red-400 mt-1">
                            Has errors
                          </span>
                        )}
                      </motion.div>
                      {index < steps.length - 1 && (
                        <div
                          className={`flex-1 h-0.5 mx-4 transition-all ${
                            currentStep > step.number
                              ? "bg-primary-400"
                              : "bg-gray-700"
                          }`}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card-gradient p-8 rounded-2xl"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Step 1: Project Details */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-semibold text-white mb-6">
                      Project Details
                    </h2>

                    {/* Error Summary */}
                    {(errors.projectName ||
                      errors.blockchain ||
                      errors.language ||
                      errors.description) && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-red-300">
                            <p className="font-medium text-red-400 mb-2">
                              Please fix the following errors:
                            </p>
                            <ul className="space-y-1">
                              {errors.projectName && (
                                <li>
                                  • Project Name: {errors.projectName.message}
                                </li>
                              )}
                              {errors.blockchain && (
                                <li>
                                  • Blockchain: {errors.blockchain.message}
                                </li>
                              )}
                              {errors.language && (
                                <li>• Language: {errors.language.message}</li>
                              )}
                              {errors.description && (
                                <li>
                                  • Description: {errors.description.message}
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Name *
                      </label>
                      <input
                        {...register("projectName")}
                        className="input-field"
                        placeholder="Enter your project name"
                      />
                      {errors.projectName && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.projectName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Contract Address (Optional)
                      </label>
                      <input
                        {...register("contractAddress")}
                        className="input-field"
                        placeholder="0x..."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Blockchain *
                        </label>
                        <select
                          {...register("blockchain")}
                          className="input-field"
                        >
                          <option value="">Select blockchain</option>
                          {blockchains.map((chain) => (
                            <option key={chain} value={chain}>
                              {chain}
                            </option>
                          ))}
                        </select>
                        {errors.blockchain && (
                          <p className="mt-1 text-sm text-red-400">
                            {errors.blockchain.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Language *
                        </label>
                        <select
                          {...register("language")}
                          className="input-field"
                        >
                          <option value="">Select language</option>
                          {languages.map((lang) => (
                            <option key={lang} value={lang}>
                              {lang}
                            </option>
                          ))}
                        </select>
                        {errors.language && (
                          <p className="mt-1 text-sm text-red-400">
                            {errors.language.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Description *
                      </label>
                      <textarea
                        {...register("description")}
                        rows={4}
                        className="input-field"
                        placeholder="Describe your project and specific security concerns..."
                      />
                      <div className="flex justify-between items-center mt-1">
                        {errors.description && (
                          <p className="text-sm text-red-400">
                            {errors.description.message}
                          </p>
                        )}
                        <p
                          className={`text-sm ml-auto ${
                            watch("description")?.length >= 50
                              ? "text-green-400"
                              : "text-gray-200"
                          }`}
                        >
                          {watch("description")?.length || 0}/50 characters
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={async () => {
                          const isValid = await validateCurrentStep();
                          if (isValid) {
                            setCurrentStep(2);
                          } else {
                            toast.error(
                              "Please fix the errors before proceeding to the next step."
                            );
                          }
                        }}
                        className="btn-primary"
                      >
                        Next Step
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Audit Requirements */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-semibold text-white mb-6">
                      Audit Requirements
                    </h2>

                    {/* Error Summary */}
                    {(errors.auditType || errors.urgency || errors.budget) && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-red-300">
                            <p className="font-medium text-red-400 mb-2">
                              Please fix the following errors:
                            </p>
                            <ul className="space-y-1">
                              {errors.auditType && (
                                <li>
                                  • Audit Type: {errors.auditType.message}
                                </li>
                              )}
                              {errors.urgency && (
                                <li>• Urgency: {errors.urgency.message}</li>
                              )}
                              {errors.budget && (
                                <li>• Budget: {errors.budget.message}</li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Audit Type *
                      </label>
                      <select
                        {...register("auditType")}
                        className="input-field"
                      >
                        <option value="">Select audit type</option>
                        {auditTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.auditType && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.auditType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Urgency Level *
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          {
                            value: "standard",
                            label: "Standard",
                            time: "2-3 weeks",
                            icon: Clock,
                          },
                          {
                            value: "express",
                            label: "Express",
                            time: "1 week",
                            icon: Zap,
                          },
                          {
                            value: "emergency",
                            label: "Emergency",
                            time: "48 hours",
                            icon: AlertCircle,
                          },
                        ].map((option) => (
                          <label
                            key={option.value}
                            className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all ${
                              urgency === option.value
                                ? "border-primary-400 bg-primary-500/10"
                                : "border-gray-700 hover:border-gray-600"
                            }`}
                          >
                            <input
                              {...register("urgency")}
                              type="radio"
                              value={option.value}
                              className="sr-only"
                            />
                            <div className="text-center">
                              <option.icon
                                className={`w-8 h-8 mx-auto mb-2 ${
                                  urgency === option.value
                                    ? "text-primary-400"
                                    : "text-gray-500"
                                }`}
                              />
                              <p className="font-medium text-white">
                                {option.label}
                              </p>
                              <p className="text-xs text-gray-200 mt-1">
                                {option.time}
                              </p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Range *
                      </label>
                      <select {...register("budget")} className="input-field">
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                      {errors.budget && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.budget.message}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="btn-secondary"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={async () => {
                          const isValid = await validateCurrentStep();
                          if (isValid) {
                            setCurrentStep(3);
                          } else {
                            toast.error(
                              "Please fix the errors before proceeding to the next step."
                            );
                          }
                        }}
                        className="btn-primary"
                      >
                        Next Step
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Contact Information */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-semibold text-white mb-6">
                      Contact Information
                    </h2>

                    {/* Error Summary */}
                    {(errors.contactName || errors.contactEmail) && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-red-300">
                            <p className="font-medium text-red-400 mb-2">
                              Please fix the following errors:
                            </p>
                            <ul className="space-y-1">
                              {errors.contactName && (
                                <li>• Name: {errors.contactName.message}</li>
                              )}
                              {errors.contactEmail && (
                                <li>• Email: {errors.contactEmail.message}</li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          {...register("contactName")}
                          className="input-field"
                          placeholder="John Doe"
                        />
                        {errors.contactName && (
                          <p className="mt-1 text-sm text-red-400">
                            {errors.contactName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          {...register("contactEmail")}
                          type="email"
                          className="input-field"
                          placeholder="john@fortknox.com"
                        />
                        {errors.contactEmail && (
                          <p className="mt-1 text-sm text-red-400">
                            {errors.contactEmail.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Telegram Handle (Optional)
                        </label>
                        <input
                          {...register("contactTelegram")}
                          className="input-field"
                          placeholder="@username"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name (Optional)
                        </label>
                        <input
                          {...register("contactCompany")}
                          className="input-field"
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-gray-300">
                          <p className="font-medium text-primary-400 mb-1">
                            What happens next?
                          </p>
                          <ul className="space-y-1">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span>
                                We'll review your request within 24 hours
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span>
                                Our team will contact you to discuss
                                requirements
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span>
                                You'll receive a detailed audit proposal and
                                timeline
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="btn-secondary"
                      >
                        Previous
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Request
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: Shield,
                  title: "Secure Process",
                  text: "All information is encrypted and confidential",
                },
                {
                  icon: Clock,
                  title: "Fast Response",
                  text: "We respond within 24 hours",
                },
                {
                  icon: DollarSign,
                  title: "Transparent Pricing",
                  text: "Clear pricing with no hidden fees",
                },
              ].map((feature, index) => (
                <div key={feature.title} className="text-center">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-white font-medium mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-200">{feature.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-navy-900 border border-primary-500/30 rounded-2xl p-8 max-w-md w-full relative"
          >
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-200 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Request Submitted!
              </h3>

              <p className="text-gray-300 mb-6">
                Thank you for your audit request. Our team will review your
                submission and contact you within 24 hours.
              </p>

              <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-300 text-left">
                    <p className="font-medium text-primary-400 mb-2">
                      What happens next?
                    </p>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>We'll review your request within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>
                          Our team will contact you to discuss requirements
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>
                          You'll receive a detailed audit proposal and timeline
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="btn-primary w-full"
              >
                Got it!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
