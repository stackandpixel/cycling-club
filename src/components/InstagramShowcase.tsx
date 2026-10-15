import React from 'react';
import { INSTAGRAM_POSTS } from '../data/gallery';
import { CLUB_CONFIG } from '../config/clubConfig';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { CyclingVisualCard } from './CyclingVisualCard';

export const InstagramShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-20 border-t border-neutral-900 bg-neutral-950/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1 rounded bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white">
                <Instagram className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-pink-400 font-bold">
                Live Community Feed · Pune
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-neutral-100 uppercase">
              On the Road & In the Feed
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Follow along on our dawn rollouts, Western Ghats epics, and Pune chai meetups via{' '}
              <span className="text-neutral-200 font-mono font-semibold">{CLUB_CONFIG.social.instagramHandle}</span>.
            </p>
          </div>

          <a
            href={CLUB_CONFIG.social.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-pink-600/20 active:scale-95"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Grid Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/80 aspect-square cursor-pointer"
            >
              {/* Graphic Card */}
              <CyclingVisualCard
                theme={post.imageTheme}
                title={post.tags[0]}
                aspectRatio="square"
                className="w-full h-full"
              />

              {/* Hover Overlay with Likes & Comments */}
              <div className="absolute inset-0 bg-neutral-950/85 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-3 flex flex-col justify-between text-neutral-100 z-20">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="text-pink-400 font-bold">@pedaltribe</span>
                  <span className="text-[10px]">{post.dateStr}</span>
                </div>

                <p className="text-[11px] text-neutral-200 line-clamp-3 leading-snug">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80 text-xs font-semibold">
                  <div className="flex items-center gap-1 text-rose-400">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-neutral-300">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-500 text-center font-mono">
          <Sparkles className="w-3.5 h-3.5 text-lime-400" />
          <span>Tag <strong className="text-neutral-300">#PedalTribeIndia</strong> on your Pune weekend rides to get featured on our feed!</span>
        </div>
      </div>
    </section>
  );
};
