import Link from "next/link";

// Blog post data - Add new posts here
const blogPosts = [
    {
        id: 1,
        slug: "what-is-high-risk-merchant-account",
        title: "What Is a High-Risk Merchant Account? Everything You Need to Know",
        excerpt: "Learn what makes a business high-risk, why traditional banks reject these merchants, and how to get approved for payment processing.",
        date: "2025-02-01",
        category: "Education",
        readTime: "5 min read",
    },
    {
        id: 2,
        slug: "cbd-payment-processing-guide",
        title: "CBD Payment Processing: The Complete 2025 Guide",
        excerpt: "Navigate the complex world of CBD merchant accounts. Discover which processors accept CBD businesses and how to stay compliant.",
        date: "2025-01-28",
        category: "Industry Guide",
        readTime: "7 min read",
    },
    {
        id: 3,
        slug: "reduce-chargebacks-high-risk",
        title: "10 Proven Strategies to Reduce Chargebacks for High-Risk Merchants",
        excerpt: "Chargebacks killing your margins? Learn actionable strategies used by successful high-risk merchants to minimize disputes.",
        date: "2025-01-25",
        category: "Tips",
        readTime: "6 min read",
    },
    {
        id: 4,
        slug: "match-list-tmf-explained",
        title: "MATCH List (TMF) Explained: How to Get Off and Get Approved",
        excerpt: "Being on the MATCH list doesn't mean you can't process payments. Learn what it means and how PayWithLegacy helps affected merchants.",
        date: "2025-01-20",
        category: "Education",
        readTime: "4 min read",
    },
    {
        id: 5,
        slug: "adult-entertainment-payment-processing",
        title: "Adult Entertainment Payment Processing: Finding the Right Partner",
        excerpt: "The adult industry faces unique payment challenges. Discover how to find reliable processing with competitive rates.",
        date: "2025-01-15",
        category: "Industry Guide",
        readTime: "5 min read",
    },
];

export default function BlogPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#0B1F3A] text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        PayWithLegacy Blog
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Expert insights on high-risk payment processing, industry trends, and strategies to grow your business.
                    </p>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-semibold text-[#DA2626] bg-red-50 px-2 py-1 rounded">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-gray-500">{post.readTime}</span>
                                </div>
                                <h2 className="text-xl font-bold text-[#0B1F3A] mb-3 hover:text-[#DA2626] transition-colors">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-400">
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </span>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-[#D2B253] font-semibold text-sm hover:underline"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-[#DA2626] text-white rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        Ready to Get Your High-Risk Merchant Account?
                    </h2>
                    <p className="mb-6 text-white/90">
                        Join over 1,000 merchants who trust PayWithLegacy for their payment processing needs.
                    </p>
                    <Link
                        href="/#signupform"
                        className="inline-block bg-[#D2B253] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#c9a94a] transition-colors"
                    >
                        Get Approved Today
                    </Link>
                </div>
            </div>
        </div>
    );
}
